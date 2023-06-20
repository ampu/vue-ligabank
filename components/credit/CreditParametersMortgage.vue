<template>
  <section class="CreditParametersMortgage">
    <h3>Шаг 2. Введите параметры кредита</h3>

    <IncrementalNumberInput
      autoFocus
      id="CreditParametersMortgage-property-amount"
      name="property-amount"
      :title="creditGoal.propertyAmountTitle"
      :onGetSuffix="formatRublesSuffix"
      :valueConstraint="creditGoal.FieldConstraint.PROPERTY_AMOUNT"
      v-model="propertyAmount"
    />

    <NumberInputWithSlider
      class="CreditParametersMortgage__initial-payment"
      id="CreditParametersMortgage-initial-payment"
      name="initial-payment"
      title="Первоначальный взнос"
      :onGetValueSuffix="formatRublesSuffix"
      legendSuffix="%"
      withCurrentValueLegend
      :valueConstraint="creditGoal.FieldConstraint.INITIAL_PAYMENT_PERCENTAGE"
      :onValueFormat="formatInitialPayment"
      :onValueParse="parseInitialPayment"
      v-model="initialPaymentPercentage"
    />

    <NumberInputWithSlider
      class="CreditParametersMortgage__credit-period"
      id="CreditParametersMortgage-credit-period"
      name="credit-period"
      title="Срок кредитования"
      :onGetValueSuffix="formatYearsSuffix"
      :onGetLegendSuffix="formatYearsSuffix"
      :valueConstraint="creditGoal.FieldConstraint.CREDIT_PERIOD"
      v-model="creditPeriod"
    />

    <ACheckbox
      name="is-maternity-capital"
      title="Использовать материнский капитал"
      v-model="isMaternityCapital"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  creditGoal: any,
  formData: any,
}>()

const emit = defineEmits<{
  (type: `update:formData`, value: any): void,
}>()

const propertyAmount = usePropDeep(props, emit, `formData`, `propertyAmount`)
const initialPaymentPercentage = usePropDeep(props, emit, `formData`, `initialPaymentPercentage`)
const creditPeriod = usePropDeep(props, emit, `formData`, `creditPeriod`)
const isMaternityCapital = usePropDeep(props, emit, `formData`, `isMaternityCapital`)

const formatInitialPayment = (initialPaymentPercentage) => {
  return calculateInitialPayment({
    ...props.formData,
    initialPaymentPercentage
  })
}

const parseInitialPayment = (initialPayment) => {
  return calculateInitialPaymentPercentage(
    props.creditGoal.FieldConstraint.INITIAL_PAYMENT_PERCENTAGE,
    props.formData,
    initialPayment,
  )
}
</script>

<style lang="scss">
.CreditParametersMortgage {
  margin: 0;
  margin-top: 33px;
  margin-bottom: -30px;
  padding: 0;

  border: none;
  background-color: transparent;

  @include tablet {
    margin-bottom: (42px - 30px);
  }

  @include mobile {
    margin-top: 24px;
    margin-bottom: (31px - 30px);
  }
}

.CreditParametersMortgage h3 {
  margin: 0;
  margin-bottom: 17px;
  padding: 0;
  display: flex;

  font-weight: 500;
  font-size: 22px;

  @include tablet-mobile {
    margin-bottom: 15px;

    font-size: 18px;
  }

  @include mobile {
    margin-bottom: 10px;

    font-size: 16px;
  }
}

.CreditParametersMortgage__credit-period {
  margin-bottom: 23px;

  @include tablet-mobile {
    margin-bottom: 18px;
  }

  @include mobile {
    margin-bottom: 16px;
  }
}

.CreditParametersMortgage__credit-period .range-slider {
  margin-top: 10px;
}
</style>
