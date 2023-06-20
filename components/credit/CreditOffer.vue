<template>
  <section class="CreditOffer">
    <h3>Наше предложение</h3>

    <dl>
      <div>
        <dt>{{ creditGoal.creditAmountTitle }}</dt>
        <dd>{{ creditAmount }} рублей</dd>
      </div>

      <div>
        <dt>Процентная ставка</dt>
        <dd>{{ interestRate }}%</dd>
      </div>

      <div>
        <dt>Ежемесячный платеж</dt>
        <dd>{{ monthlyPayment }} рублей</dd>
      </div>

      <div>
        <dt>Необходимый доход</dt>
        <dd>{{ monthlyIncome }} рублей</dd>
      </div>
    </dl>

    <NuxtLink
      :to="LocalPath.CREDIT_REQUEST"
      @click.capture.prevent
      @click="emit(`submit`)"
    >
      Оформить заявку
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import {CreditGoalModel} from '~/utils/credit-helpers'

const props = defineProps<{
  formData: FormData,
  creditGoal: CreditGoalModel,
}>()

const emit = defineEmits<{
  (type: `submit`),
}>()

const creditAmount = computed(() => formatInteger(calculateCreditAmount(props.formData)))
const interestRate = computed(() => formatFloat(calculateInterestRate(props.formData)))
const monthlyPayment = computed(() => formatInteger(calculateMonthlyPayment(props.formData)))
const monthlyIncome = computed(() => formatInteger(calculateMonthlyIncome(props.formData)))
</script>

<style lang="scss">
.CreditOffer {
  box-sizing: border-box;
  margin: 0;
  padding: 60px 58px;
  width: rubber--desktop(500px);
  display: flex;
  flex-flow: column;

  border-radius: 4px;
  background-color: $alternative-color;

  @include tablet-mobile {
    padding: 53px 60px 60px;
    width: 100%;
  }

  @include mobile {
    padding: 34px 15px 40px;
  }
}

.CreditOffer h3 {
  margin: 0;
  margin-bottom: 23px;
  padding: 0;

  font-weight: 500;
  font-size: 22px;

  @include tablet-mobile {
    margin-bottom: 25px;
  }

  @include mobile {
    margin-bottom: 23px;

    font-size: 18px;
  }
}

.CreditOffer dl {
  margin: 0;
  margin-bottom: 33px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @include tablet-mobile {
    margin-bottom: 35px;
    justify-content: start;
    grid-column-gap: 51px;
    grid-row-gap: 27px;
  }

  @include mobile {
    margin-bottom: 30px;
    grid-template-columns: auto;
    grid-row-gap: 14px;
  }
}

.CreditOffer div {
  display: flex;
  flex-flow: column;
}

.CreditOffer dt {
  margin: 0;
  padding: 0;

  color: $label-color;
}

.CreditOffer dd {
  order: -1;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;

  font-weight: 500;
  font-size: 22px;

  @include tablet-mobile {
    margin-bottom: 2px;
  }

  @include mobile {
    margin-bottom: 0;

    font-size: 18px;
  }
}

.CreditOffer a {
  @include button;

  padding: 14px 24px 15px;
  display: flex;
  justify-content: center;

  font-weight: 500;
  font-size: 16px;
  text-decoration: none;

  @include mobile {
    padding: 16px;

    font-size: 14px;
  }
}
</style>
