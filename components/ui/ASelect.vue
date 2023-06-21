<template>
  <div
    ref="containerRef"
    :class="[`ASelect`, isActive && `active`]"
  >
    <select
      ref="selectRef"
      :name="name"
      v-model="value"
      @mousedown="onSelectMouseDown"
      @keydown="onSelectKeyDown"
    >
      <template
        v-for="option in options"
        :key="option.value"
      >
        <option
          :value="option.value"
        >
          {{ option.title }}
        </option>
      </template>
    </select>
    <ul v-if="isActive">
      <template
        v-for="(option, optionIndex) in options"
        :key="option.value"
      >
        <li :class="{active: modelValue === option.value}">
          <button
            type="button"
            :data-index="optionIndex"
            :data-value="option.value"
            @click="onButtonClick"
            @keydown="onButtonKeyDown"
            :data-auto-focus="modelValue === option.value ? true : undefined"
          >
            {{ option.title }}
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
// useAutoFocus(containerRef, isActive)

import {coerceArrayIndex} from '~/utils/number-helpers'

const props = defineProps<{
  name: string,
  options: Array<{ value: unknown, title: string }>,
  modelValue: unknown,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: unknown): void,
}>()

const value = useProp(props, emit, `modelValue`)

const containerRef = ref()
const selectRef = ref()

const isActive = ref(false)

watchEffect((onCleanup) => {
  if (!isActive.value) {
    return
  }
  const onDocumentKeyDown = (evt) => {
    if (evt.key === KeyboardKey.ESCAPE) {
      evt.preventDefault()
      evt.stopPropagation()
      selectRef.value.focus()
      isActive.value = false
    }
  }
  document.addEventListener(`keydown`, onDocumentKeyDown)

  onCleanup(() => {
    document.removeEventListener(`keydown`, onDocumentKeyDown)
  })
})

watchEffect((onCleanup) => {
  if (!isActive.value) {
    return
  }
  const onDocumentMouseDown = (evt) => {
    if (evt.button === MouseButton.PRIMARY) {
      if (!containerRef.value.contains(evt.target)) {
        isActive.value = false
      }
    }
  }
  document.addEventListener(`mousedown`, onDocumentMouseDown)

  onCleanup(() => {
    document.removeEventListener(`mousedown`, onDocumentMouseDown)
  })
})

const onSelectMouseDown = (evt) => {
  if (evt.button === MouseButton.PRIMARY) {
    evt.preventDefault()
    isActive.value = true
  }
}

const onSelectKeyDown = (evt) => {
  if ([KeyboardKey.SPACE, KeyboardKey.ARROW_UP, KeyboardKey.ARROW_DOWN].includes(evt.key)) {
    evt.preventDefault()
    isActive.value = true
  }
}

const onButtonClick = (evt) => {
  selectRef.value.focus()
  isActive.value = false
  value.value = evt.currentTarget.dataset.value
}

const onButtonKeyDown = (evt) => {
  if ([KeyboardKey.ARROW_UP, KeyboardKey.ARROW_DOWN].includes(evt.key)) {
    evt.preventDefault()

    const rawNextOptionIndex = +evt.currentTarget.dataset.index + (evt.key === KeyboardKey.ARROW_UP ? -1 : 1)
    const nextOptionIndex = coerceArrayIndex(rawNextOptionIndex, props.options)
    const optionElement = containerRef.value.querySelector(`li:nth-of-type(${nextOptionIndex + 1}) button`)
    optionElement.focus()
  }
}
</script>

<style lang="scss">
.ASelect {
  position: relative;
  display: grid;
}

.ASelect select {
  grid-area: 1 / 1;
  box-sizing: border-box;
  margin: 0;
  padding: 18px 24px;
  padding-right: (18px + 24px);
  width: 100%;

  font: inherit;
  font-weight: 500;

  appearance: none;
  cursor: pointer;
  border: 1px solid $primary-color;
  border-radius: 4px;
  background: transparent url($select-icon) no-repeat calc(100% - 22px) center / 18px 11px;

  &:hover {
    background-image: url($select-icon--active);
  }

  &:focus {
    outline: none;

    @include thin-outline;
  }

  @include mobile {
    padding-left: 14px;
    padding-right: (18px + 13px);

    background-position: calc(100% - 13px) center;
  }
}

.ASelect ul {
  grid-area: 1 / 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;

  border: 1px solid $primary-color;
  border-radius: 4px;
  background-color: $white-color;
}

.ASelect select:focus + ul {
  @include thin-outline;
}

.ASelect button {
  margin: 0;
  padding: 18px 24px;
  display: flex;
  width: 100%;

  font: inherit;

  cursor: pointer;
  border: none;
  border-bottom: 1px solid $border-color;
  background-color: transparent;

  &.active {
    font-weight: 500;
  }

  &:hover {
    font-weight: 500;
  }

  &:focus {
    @include outline;

    outline: none;
  }

  @include mobile {
    padding: 18px 14px;
  }
}

.ASelect li:last-of-type button {
  border-radius: 0 0 4px 4px;
}

.ASelect li:first-of-type button {
  position: relative;
  padding-right: (18px + 24px);

  border-color: $calculator-border-color;
  border-radius: 4px 4px 0 0;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: transparent url($select-icon) no-repeat 22px center / 18px 11px;

    transform: rotate(180deg);
  }

  @include mobile {
    padding-right: (18px + 14px);

    &::before {
      background-position: 14px center;
    }
  }
}

.ASelect:hover li:first-of-type button {
  &::before {
    background-image: url($select-icon--active);
  }
}
</style>
