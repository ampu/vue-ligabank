<template>
  <div class="RangeSlider" ref="containerRef">
    <div
      class="RangeSlider__pin"
      tabIndex="0"
      @keydown="onPinKeyDown"
      @mousedown="onPinMouseDown"
      @touchstart="onPinTouchStart"
    />
  </div>
</template>

<script setup lang="ts">
import {Constraint} from '~/utils/credit-helpers'

const props = defineProps<{
  valueConstraint: Constraint,
  modelValue: number,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: number): void,
}>()

const value = useProp(props, emit, `modelValue`)

const isActive = ref(false)

let slide: { startValue: number, startX: number } | undefined = undefined

const containerRef = ref()

const calculateNewValue = (container: HTMLElement, {startValue, startX}, endX, valueConstraint) => {
  const minOffset = container.offsetLeft
  const maxOffset = minOffset + container.offsetWidth

  const ratioDifference = (endX - startX) / (maxOffset - minOffset)
  const valueDifference = ratioDifference * (valueConstraint.max - valueConstraint.min)
  const stepDifference = Math.round(valueDifference / valueConstraint.step)

  return coerceByConstraint(startValue + stepDifference * valueConstraint.step, valueConstraint)
}

const getRatio = (value, {min, max}) => {
  return coerceByConstraint((value - min) / (max - min) * PERCENTAGE_CONSTRAINT.max, PERCENTAGE_CONSTRAINT)
}

const onPinKeyDown = (evt) => {
  switch (evt.key) {
    case KeyboardKey.ARROW_LEFT:
      value.value = coerceByConstraint(value.value - props.valueConstraint.step, props.valueConstraint)
      break

    case KeyboardKey.ARROW_RIGHT:
      value.value = coerceByConstraint(value.value + props.valueConstraint.step, props.valueConstraint)
      break
  }
}

const onPinMouseDown = (evt) => {
  slide = {
    startValue: value.value,
    startX: evt.clientX,
  }

  isActive.value = true
}

const onDocumentMouseMove = (evt) => {
  if (slide) {
    value.value = calculateNewValue(containerRef.value, slide, evt.clientX, props.valueConstraint)
  }
}

const onDocumentMouseUp = () => {
  if (slide) {
    slide = undefined
    isActive.value = false
  }
}

const onPinTouchStart = (evt) => {
  slide = {
    startValue: value.value,
    startX: evt.targetTouches[0].clientX,
  }

  isActive.value = true
}

const onDocumentTouchMove = (evt) => {
  if (slide) {
    value.value = calculateNewValue(containerRef.value, slide, evt.targetTouches[0].clientX, props.valueConstraint)
  }
}


const onDocumentTouchEnd = () => {
  if (slide) {
    slide = undefined
    isActive.value = false
  }
}

watchEffect((onCleanup) => {
  if (!isActive.value) {
    return
  }
  document.body.classList.add(`page-body--active`)
  document.addEventListener(`mousemove`, onDocumentMouseMove)
  document.addEventListener(`mouseup`, onDocumentMouseUp)
  document.addEventListener(`touchmove`, onDocumentTouchMove)
  document.addEventListener(`touchend`, onDocumentTouchEnd)

  onCleanup(() => {
    document.body.classList.remove(`page-body--active`)
    document.removeEventListener(`mousemove`, onDocumentMouseMove)
    document.removeEventListener(`mouseup`, onDocumentMouseUp)
    document.removeEventListener(`touchmove`, onDocumentTouchMove)
    document.removeEventListener(`touchend`, onDocumentTouchEnd)
  })
})
</script>

<style lang="scss">
.RangeSlider {
  position: relative;
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  width: calc(100% - 14px);
  height: 14px;

  &::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 0;
    width: calc(100% + 14px);
    height: 50%;
    display: flex;

    border-bottom: 1px solid $border-color;
  }
}

.RangeSlider__pin {
  position: absolute;
  left: v-bind("`${coerceByConstraint(getRatio(value, valueConstraint), PERCENTAGE_CONSTRAINT)}%`");
  z-index: 1;
  display: flex;
  width: 14px;
  height: 14px;
  padding: 3px;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -3px;
  margin-bottom: -3px;

  cursor: pointer;
  border-radius: 50%;
  background-color: $primary-active-color;
  background-clip: content-box;

}
</style>
