<template>
  <NumericFormat
    className="NumberInput"
    :allowNegative="false"
    :allowLeadingZeros="false"
    :decimalScale="0"
    thousandSeparator=" "
    :suffix="suffix"
    :maxLength="(formatInteger(max) + suffix).length"
    :value="value"
    :onValueChange="onValueChange"
    :getInputRef="setInputRef"
  />
</template>

<script setup lang="ts">
import {NumericFormat as ReactNumericFormat} from 'react-number-format'
import {applyReactInVue, ReactComponent} from 'veaury'
import {useAttrs} from 'vue'

const NumericFormat = applyReactInVue(ReactNumericFormat as ReactComponent)

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()

const props = defineProps<{
  autoFocus?: boolean,
  modelValue: number,
  max: number,
  suffix: string,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: number): void,
}>()

const value = useProp(props, emit, `modelValue`)
const inputRef = ref<HTMLInputElement>()

const onValueChange = ({floatValue}) => {
  value.value = floatValue || 0
}

const setInputRef = (input: HTMLInputElement) => {
  inputRef.value = input
}

watchEffect((onCleanup) => {
  if (!inputRef.value) {
    return
  }
  const keys = Object.keys(attrs).filter((key) => /^on[A-Z][a-z]*$/.test(key))
  const values = keys.map((key) => attrs[key])
  const eventTypes = keys.map((key) => key.replace(/^on/, ``).toLowerCase())
  keys.forEach((key, i) => {
    const callback = values[i] as HTMLElementEventMap[string]
    const eventType = eventTypes[i] as keyof HTMLElementEventMap
    inputRef.value!.addEventListener(eventType, callback)
  })
  onCleanup(() => {
    keys.forEach((key, i) => {
      const callback = values[i] as HTMLElementEventMap[string]
      const eventType = eventTypes[i] as keyof HTMLElementEventMap
      inputRef.value!.removeEventListener(eventType, callback)
    })
  })
})

onMounted(() => {
  if (props.autoFocus) {
    inputRef.value!.focus()
  }
})
</script>

<style lang="scss">
.NumberInput {
  box-sizing: border-box;
  padding: 16px 24px 17px;
  width: 100%;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;

  border: 1px solid $primary-color;
  border-radius: 4px;
  color: $primary-color;

  @include tablet-mobile {
    padding-top: 18px;
    padding-bottom: 18px;

    font-size: 16px;
  }
}
</style>
