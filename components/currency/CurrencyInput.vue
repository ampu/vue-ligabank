<template>
  <select
    :value="modelValue"
    @change="emit(`update:modelValue`, $event.target.value)"
  >
    <option
      v-for="currency of CURRENCIES"
      :key="currency"
      :value="currency"
      v-text="currency"
    />
  </select>
</template>

<script setup lang="ts">
import {CURRENCIES, Currency} from '~/utils/currency-helpers'

const props = defineProps<{
  modelValue: Currency,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: Currency): void
}>()
</script>
