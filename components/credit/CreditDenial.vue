<template>
  <div class="CreditDenial">
    <strong>
      Наш банк не выдаёт {{ creditGoal.denialTitle }} меньше {{ denialAmount }} рублей.
    </strong>
    <p>Попробуйте использовать другие параметры&nbsp;для&nbsp;расчёта.</p>
  </div>
</template>

<script setup lang="ts">
import {CreditGoalModel} from '~/utils/credit-helpers'

const props = defineProps<{
  creditGoal: CreditGoalModel,
}>()

const denialAmount = computed(() => formatInteger(props.creditGoal.denialAmount!))
</script>

<style lang="scss">
.CreditDenial {
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  padding: 52px 58px 55px;
  width: rubber--desktop(500px);

  border-radius: 4px;
  background-color: $alternative-color;

  @include tablet-mobile {
    width: 678px;
  }

  @include mobile {
    padding: 34px 15px 36px;
    width: 290px;
  }
}

.CreditDenial strong {
  display: flex;

  font-weight: 500;
  font-size: 22px;
  line-height: 1.45;

  margin-bottom: 12px;

  @include tablet {
    width: 350px;
  }

  @include mobile {
    width: 208px;

    font-size: 18px;
  }
}

.CreditDenial p {
  margin: 0;
  padding: 0;

  font-weight: 400;

  color: $label-color;

  @include tablet {
    width: 253px;
  }
}
</style>
