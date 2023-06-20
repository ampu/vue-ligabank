<template>
  <section class="CreditGoalSelect">
    <h3>Шаг 1. Цель кредита</h3>
    <ASelect
      name="credit-goal"
      :options="CREDIT_GOALS"
      v-model="value"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: string): void,
}>()

const value = useProp(props, emit, `modelValue`)
</script>

<style lang="scss">
.CreditGoalSelect {
  margin: 0;
  padding: 0;

  border: none;
  background-color: transparent;
}

.CreditGoalSelect h3 {
  margin: 0;
  margin-bottom: 22px;
  padding: 0;
  display: flex;

  font-weight: 500;
  font-size: 22px;

  @include tablet-mobile {
    margin-bottom: 19px;

    font-size: 18px;
  }

  @include mobile {
    margin-bottom: 15px;

    font-size: 16px;
  }
}
</style>
