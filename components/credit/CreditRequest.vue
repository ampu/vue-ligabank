<template>
  <section
    :class="[`CreditRequest`, isError && `shake`]"
    :data-navigation-id="LocalPath.CREDIT_REQUEST"
  >
    <h3>Шаг 3. Оформление заявки</h3>

    <dl>
      <div>
        <dt>Номер заявки</dt>
        <dd>№ {{ formatRequestId(formData.id) }}</dd>
      </div>

      <div>
        <dt>Цель кредита</dt>
        <dd>{{ creditGoal.requestTitle }}</dd>
      </div>

      <div>
        <dt>{{ creditGoal.propertyAmountTitle }}</dt>
        <dd>{{ formatInteger(formData.propertyAmount) }} рублей</dd>
      </div>

      <div>
        <dt>Первоначальный взнос</dt>
        <dd>{{ formatInteger(calculateInitialPayment(formData)) }} рублей</dd>
      </div>

      <div>
        <dt>Срок кредитования</dt>
        <dd>{{ formatInteger(formData.creditPeriod) }} лет</dd>
      </div>
    </dl>

    <form ref="formRef" @submit.prevent>
      <input type="hidden" name="id" :value="formData.id"/>

      <label class="CreditRequest__name">
        <input
          v-focus
          type="text"
          name="name"
          v-model="name"
          placeholder="ФИО"
          autoComplete="username"
          required
        />
      </label>

      <label class="CreditRequest__phone">
        <PatternInput
          type="tel"
          name="phone"
          placeholder="Телефон"
          autoComplete="tel"
          required
          format="+7 (###) ###-##-##"
          pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
          v-model="phone"
        />
      </label>

      <label class="CreditRequest__email">
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="E-mail"
          autoComplete="email"
          required
        />
      </label>

      <button type="submit" @click.prevent="onSubmitClick">Отправить</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import {FormData, CreditGoalModel} from '~/utils/credit-helpers'

const props = defineProps<{
  creditGoal: CreditGoalModel,
  formData: FormData,
}>()

const emit = defineEmits<{
  (type: `update:formData`, value: string),
  (type: `submit`),
}>()

const formRef = ref<HTMLFormElement>()
const [isError, setError, unsetError] = useActive(false)

const name = usePropDeep(props, emit, `formData`, `name`)
const phone = usePropDeep(props, emit, `formData`, `phone`)
const email = usePropDeep(props, emit, `formData`, `email`)

const onSubmitClick = () => {
  unsetError()
  nextTick(() => {
    if (!formRef.value!.reportValidity()) {
      setError()
      return
    }
    emit(`submit`)
  })
}
</script>

<style lang="scss">
.CreditRequest {
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 68px;
  padding: 64px 70px 68px;
  width: 770px;
  display: flex;
  flex-flow: column;

  background-color: $alternative-color;

  @include tablet-mobile {
    margin-top: 54px;
    padding: 0;
    width: 100%;

    background-color: transparent;
  }

  @include mobile {
    margin-top: 42px;
  }
}

.CreditRequest h3 {
  margin: 0;
  margin-bottom: 13px;
  padding: 0;

  font-weight: 500;
  font-size: 22px;
  text-align: center;

  @include tablet-mobile {
    margin-bottom: 27px;

    font-size: 18px;
  }

  @include mobile {
    margin-bottom: 21px;

    font-size: 16px;
  }
}

.CreditRequest dl {
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  display: flex;
  flex-flow: column;
}

.CreditRequest dl div {
  padding: 12px 0;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 40px;

  border-bottom: 1px solid $alternative-border-color;

  @include mobile {
    padding: 14px 0 14px;
    grid-template-columns: auto;
  }
}

.CreditRequest dt {
  margin: 0;
  padding: 0;

  color: $label-color;
}

.CreditRequest dd {
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-size: 22px;
  text-align: right;

  @include mobile {
    order: -1;
    padding-left: 0;

    font-size: 18px;
    text-align: left;
  }
}

.CreditRequest form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @include mobile {
    grid-template-columns: auto;
    grid-row-gap: 20px;
  }
}

.CreditRequest input {
  box-sizing: border-box;
  padding: 16px 24px 17px;
  width: 100%;
  display: flex;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.03em;

  border-radius: 4px;
  border: 1px solid $calculator-border-color;
  background-color: transparent;

  @include mobile {
    padding: 18px 14px;

    font-size: 16px;
  }
}

.CreditRequest__name {
  grid-column: 1 / -1;
}

.CreditRequest button[type="submit"] {
  @include button;

  grid-column: 1 / -1;
  margin: 0 auto;
  margin-top: 10px;
  padding: 16px 58px 17px;

  font-weight: 500;
  font-size: 16px;

  @include tablet-mobile {
    padding: 16px 58px 17px (58px + 10px);
    width: 100%;
  }

  @include mobile {
    padding: 17px 58px 17px;
    font-size: 14px;
  }
}
</style>
