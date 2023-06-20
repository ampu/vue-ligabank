<template>
  <section
    ref="containerRef"
    class="CreditCalculator"
    :data-navigation-id="LocalPath.CREDIT_CALCULATOR"
  >
    <div class="CreditCalculator__container">
      <h2>Кредитный калькулятор</h2>
      <form class="CreditCalculator__parameters-form" @submit.prevent="onFormSubmit">
        <CreditGoalSelect v-model="creditGoalKey"/>

        <component
          :is="creditGoal.parametersComponent"
          :key="creditGoal.value"
          :creditGoal="creditGoal"
          :formData="formData"
          @update:formData="setFormDataAndDeactivateCreditRequest"
        />
      </form>

      <template v-if="creditGoalKey && formData">
        <template v-if="Number.isFinite(creditAmount) && isValidFormData(creditGoal, formData) && creditGoal.denialAmount">
          <template v-if="creditAmount < creditGoal.denialAmount">
            <CreditDenial
              :creditGoal="creditGoal"
            />
          </template>
          <template v-else>
            <CreditOffer
              :creditGoal="creditGoal"
              :formData="formData"
              @submit="onCreditRequestClick"
            />
          </template>
        </template>

        <CreditRequest
          v-if="isCreditRequestActive"
          :creditGoal="creditGoal"
          v-model:formData="formData"
          @setFormData="setFormData"
          @submit="onCreditRequestSubmit"
        />
      </template>

      <CreditThankYou v-if="isThankYouActive" @close="onThankYouClose"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {calculateCreditAmount, CreditGoal, CreditGoalKey, findCreditGoalByKey, generateRequestId, isValidFormData} from '~/utils/credit-helpers'
import {creditRequestStore} from '~/utils/credit-request-store'
import {scrollIntoViewByNavigationId} from '~/utils/dom-helpers'

const containerRef = ref()
const newCreditRequestDataRef = ref()

const creditGoalKey = ref(CreditGoalKey.DEFAULT)
const creditGoal = computed(() => findCreditGoalByKey(creditGoalKey.value))
const creditRequestData = ref(creditRequestStore.getMap())
const formData = ref<FormData>()
const isCreditRequestActive = ref(false)
const isThankYouActive = ref(false)
const creditAmount = computed(() => formData.value !== undefined ? calculateCreditAmount(formData.value!) : undefined)

const setFormData = (newFormData) => {
  formData.value = newFormData
}

const setFormDataAndDeactivateCreditRequest = (newFormData) => {
  setFormData(newFormData)
  isCreditRequestActive.value = false
}

const onCreditRequestClick = () => {
  isCreditRequestActive.value = true
  scrollIntoViewByNavigationId(`credit-request`)
}

const onCreditRequestSubmit = () => {
  const {name, email, phone} = formData.value!

  newCreditRequestDataRef.value = {
    ...creditRequestData.value,
    id: generateRequestId(),
    name,
    email,
    phone,
  }
  creditRequestStore.patchMap(newCreditRequestDataRef.value)

  isThankYouActive.value = true
}

const onThankYouClose = () => {
  creditRequestData.value = newCreditRequestDataRef.value

  isThankYouActive.value = false
  isCreditRequestActive.value = false
  creditGoalKey.value = CreditGoalKey.DEFAULT

  containerRef.value.scrollIntoView()
}

const onFormSubmit = (evt) => {
  evt.preventDefault()
}

watchEffect(() => {
  setFormDataAndDeactivateCreditRequest(creditGoal.value.defaultFormData
    ? {...creditGoal.value.defaultFormData, ...creditRequestData.value}
    : undefined)
})
</script>

<style lang="scss">
.CreditCalculator {
  margin-top: 95px;

  @include tablet-mobile {
    margin-top: 68px;
  }

  @include mobile {
    margin-top: 53px;
  }
}

.CreditCalculator__container {
  @include container;

  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @include tablet-mobile {
    flex-flow: column;
  }
}

.CreditCalculator__parameters-form {
  width: rubber--desktop(600px);
  display: flex;
  flex-flow: column;

  @include tablet-mobile {
    width: 100%;
  }
}

.CreditCalculator h2 {
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  width: 100%;

  font-weight: 700;
  font-size: 41px;

  @include tablet-mobile {
    margin-bottom: 30px;

    font-size: 32px;
  }

  @include mobile {
    margin-bottom: 22px;

    font-size: 22px;
  }
}
</style>
