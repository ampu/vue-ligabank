<template>
  <div
    ref="containerRef"
    :class="[`IncrementalNumberInput`, isValidValue || `error`]"
  >
    <label :for="id">{{ title }}</label>
    <div>
      <button
        type="button"
        class="IncrementalNumberInput__decrement"
        @click="onDecrementClick"
      >
        <MinusIcon/>
        <span class="visually-hidden">Уменьшить</span>
      </button>

      <NumberInput
        :autoFocus="autoFocus"
        :id="id"
        :name="name"
        :suffix="suffix"
        :max="valueConstraint.max"
        v-model="currentValue"
        @blur="commitValue"
        @keydown.enter="commitValue"
      />

      <span v-if="!isValidValue" class="IncrementalNumberInput__error">некорректное значение</span>

      <button
        type="button"
        class="IncrementalNumberInput__increment"
        @click="onIncrementClick"
      >
        <PlusIcon/>
        <span class="visually-hidden">Увеличить</span>
      </button>
    </div>
    <p>
      От {{ formatInteger(valueConstraint.min) }}&nbsp;&nbsp;до {{ formatInteger(valueConstraint.max) }}
      {{ onGetSuffix ? onGetSuffix(valueConstraint.max) : suffix }}
    </p>
  </div>
</template>

<script setup lang="ts">
import MinusIcon from '~/assets/icons/minus-icon.svg?component'
import PlusIcon from '~/assets/icons/plus-icon.svg?component'

const props = defineProps<{
  autoFocus?: boolean,
  id: string,
  name: string,
  modelValue: number,
  valueConstraint: { min: number, max: number, step: number },
  title: string,
  suffix?: string
  onGetSuffix?: (value: number) => string,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: number): void,
}>()

const value = useProp(props, emit, `modelValue`)

const currentValue = ref(value.value)

watchEffect(() => {
  currentValue.value = value.value
})

const suffix = computed(() => props.onGetSuffix?.(currentValue.value) ?? props.suffix!)
const isValidValue = computed(() => isValidByConstraint(value.value, props.valueConstraint))

const commitValue = () => {
  value.value = currentValue.value
}

const onDecrementClick = () => {
  value.value = currentValue.value < props.valueConstraint.step ? 0 : currentValue.value - props.valueConstraint.step
}

const onIncrementClick = () => {
  value.value = currentValue.value + props.valueConstraint.step
}
</script>

<style lang="scss">
.IncrementalNumberInput {
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  flex-flow: column;

  border: none;
  color: $label-color;

  @include tablet-mobile {
    margin-bottom: 16px;
  }

  @include mobile {
    margin-bottom: 12px;
  }
}

.IncrementalNumberInput label {
  margin-bottom: 10px;
  display: flex;

  @include tablet-mobile {
    margin-bottom: 8px;
  }

  @include tablet-mobile {
    margin-bottom: 9px;
  }
}

.IncrementalNumberInput div {
  position: relative;
  margin: 0;
  padding: 0;

  border-radius: 4px;
}

.IncrementalNumberInput.error input:not(:focus) {
  @include dangerous-outline;

  border-color: $dangerous-outline-color;
}

.IncrementalNumberInput__error {
  display: none;
}

.IncrementalNumberInput:not(:focus-within) .IncrementalNumberInput__error {
  position: absolute;
  left: 50%;
  bottom: 5px;
  display: flex;

  color: $dangerous-outline-color;
  font-size: 14px;

  transform: translateX(-50%);

  @include mobile {
    font-size: 12px;
  }
}

.IncrementalNumberInput__increment {
  position: absolute;
  right: 19px;
  top: 16px;
  box-sizing: content-box;
  margin: 0;
  padding: 5px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  background-color: transparent;

  @include tablet-mobile {
    top: 18px;
  }

  @include mobile {
    top: 17px;
    right: 10px;
  }
}

.IncrementalNumberInput__increment svg {
  width: 16px;
  height: 16px;
}

.IncrementalNumberInput__increment:hover path {
  stroke-width: 3px;
}

.IncrementalNumberInput__increment:active path {
  stroke-opacity: 0.5;
}

.IncrementalNumberInput__decrement {
  position: absolute;
  left: 19px;
  top: 16px;
  box-sizing: content-box;
  margin: 0;
  padding: 5px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  background-color: transparent;

  @include tablet-mobile {
    top: 18px;
  }

  @include mobile {
    top: 17px;
  }
}

.IncrementalNumberInput__decrement svg {
  width: 16px;
  height: 16px;
}

.IncrementalNumberInput__decrement:hover path {
  stroke-width: 3px;
}

.IncrementalNumberInput__decrement:active path {
  stroke-opacity: 0.5;
}

.IncrementalNumberInput p {
  margin: 0;
  margin-top: 5px;
  padding: 0;
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  white-space: pre-wrap;

  user-select: none;
  color: $primary-legend-color;
}
</style>
