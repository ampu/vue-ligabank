<template>
  <div :class="[`NumberInputWithSlider`, props.class]">
    <label :for="id">{{ title }}</label>
    <NumberInput
      :id="id"
      :name="name"
      :suffix="onGetValueSuffix?.(onValueFormat?.(currentValue) ?? currentValue) ?? valueSuffix!"
      :max="onValueFormat?.(valueConstraint.max) ?? valueConstraint.max"
      :modelValue="onValueFormat?.(currentValue) ?? currentValue"
      @update:modelValue="onNumberInputValueChange"
      @blur="onNumberInputBlur"
    />
    <RangeSlider
      :valueConstraint="valueConstraint"
      :modelValue="currentValue"
      @update:modelValue="onRangeSliderValueChange"
    />
    <p v-if="withCurrentValueLegend">
      {{ formatInteger(currentValue) }}{{ onGetLegendSuffix?.(currentValue) ?? legendSuffix }}
    </p>
    <p v-else>
      <span>{{ formatInteger(valueConstraint.min) }}{{ onGetLegendSuffix?.(valueConstraint.min) ?? legendSuffix }}</span>
      <span>{{ formatInteger(valueConstraint.max) }}{{ onGetLegendSuffix?.(valueConstraint.max) ?? legendSuffix }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number,
  valueConstraint: { min: number, max: number, step: number },
  id: string,
  name: string,
  title: string,
  class?: string,
  withCurrentValueLegend?: boolean,
  legendSuffix?: string,
  onGetLegendSuffix?: (value: number) => string,
  valueSuffix?: string,
  onGetValueSuffix?: (value: number) => string,
  onValueParse?: (value: string) => number,
  onValueFormat?: (value: number) => number,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: number): void,
}>()

const value = useProp<number>(props, emit, `modelValue`)
const currentValue = ref(value.value)

watchEffect(() => {
  currentValue.value = value.value
})

const onNumberInputValueChange = (rawValue) => {
  currentValue.value = props.onValueParse?.(rawValue) ?? rawValue
}

const onNumberInputBlur = () => {
  const newValue = coerceByConstraint(currentValue.value, props.valueConstraint)
  currentValue.value = newValue
  value.value = newValue
}

const onRangeSliderValueChange = (newValue) => {
  currentValue.value = newValue
  value.value = newValue
}
</script>

<style lang="scss">
.NumberInputWithSlider {
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
    margin-bottom: 14px;
  }
}

.NumberInputWithSlider .range-slider {
  margin-top: 14px;
}

.NumberInputWithSlider label {
  margin-bottom: 10px;
  display: flex;

  @include tablet-mobile {
    margin-bottom: 10px;
  }

  @include mobile {
    margin-bottom: 8px;
  }
}

.NumberInputWithSlider p {
  margin: 0;
  margin-top: 4px;
  padding: 0;
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  white-space: pre-wrap;

  user-select: none;
  color: $primary-legend-color;

  @include tablet-mobile {
    margin-top: 2px;
  }
}
</style>
