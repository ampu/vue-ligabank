<template>
  <section class="CreditParametersCar">
    <h3>Шаг 2. Введите параметры кредита</h3>

    <IncrementalNumberInput
      autoFocus
      id="CreditParametersCar-property-amount"
      name="property-amount"
      :title="creditGoal.propertyAmountTitle"
      :onGetSuffix="formatRublesSuffix"
      :valueConstraint="creditGoal.FieldConstraint.PROPERTY_AMOUNT"
      v-model="propertyAmount"
    />

    <NumberInputWithSlider
      class="CreditParametersCar__initial-payment"
      id="CreditParametersCar-initial-payment"
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
      class="CreditParametersCar__credit-period"
      id="CreditParametersCar-credit-period"
      name="credit-period"
      title="Срок кредитования"
      :onGetValueSuffix="formatYearsSuffix"
      :onGetLegendSuffix="formatYearsSuffix"
      :valueConstraint="creditGoal.FieldConstraint.CREDIT_PERIOD"
      v-model="creditPeriod"
    />

    <ACheckbox
      name="is-casco"
      title="Оформить КАСКО в нашем банке"
      v-model="isCasco"
    />

    <ACheckbox
      name="is-life-insurance"
      title="Оформить Страхование жизни в нашем банке"
      v-model="isLifeInsurance"
    />
  </section>
</template>

<script setup lang="ts">
import {usePropDeep} from '~/composables/use-prop'

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
const isCasco = usePropDeep(props, emit, `formData`, `isCasco`)
const isLifeInsurance = usePropDeep(props, emit, `formData`, `isLifeInsurance`)

const formatInitialPayment = (initialPaymentPercentage) => {
  return calculateInitialPayment({
    ...props.formData,
    initialPaymentPercentage,
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
.CreditParametersCar {
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

.CreditParametersCar h3 {
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

.CreditParametersCar__credit-period {
  margin-bottom: 23px;

  @include tablet-mobile {
    margin-bottom: 18px;
  }

  @include mobile {
    margin-bottom: 16px;
  }
}

.CreditParametersCar__credit-period .range-slider {
  margin-top: 10px;
}
</style>
