<template>
  <form
    :data-navigation-id="LocalPath.CURRENCY"
    class="CurrencyForm"
    method="get"
    :action="LocalPath.CURRENCY"
  >
    <h1 class="CurrencyForm__title page-title">Конвертер валют</h1>

    <div v-if="hasError" class="CurrencyForm__error-container">
      <p class="CurrencyForm__error-message">Не удалось выполнить конвертацию.</p>
      <p class="CurrencyForm__error-message">Попробуйте повторить операцию позже.</p>
    </div>

    <fieldset class="CurrencyForm__fieldset CurrencyForm__fieldset--cost">
      <label class="CurrencyForm__label" for="CurrencyForm-cost-amount">
        У меня есть
      </label>

      <input
        class="CurrencyForm__amount"
        id="CurrencyForm-cost-amount"
        type="number"
        name="cost-amount"
        placeholder="0"
        :disabled="currencyStore.state === CurrencyState.COST_PENDING"
        :value="formattedCostAmount"
        @change="onCostAmountChange"
        @keydown="preventForbiddenKeyDown"
      />

      <CurrencyInput
        class="CurrencyForm__currency"
        name="cost-currency"
        :modelValue="currencyStore.argument.costCurrency"
        @update:modelValue="onCostCurrencyChange"
      />
    </fieldset>

    <fieldset class="CurrencyForm__fieldset CurrencyForm__fieldset--income">
      <label class="CurrencyForm__label" for="CurrencyForm-income-amount">
        Хочу приобрести
      </label>

      <input
        class="CurrencyForm__amount"
        id="CurrencyForm-income-amount"
        type="number"
        name="income-amount"
        placeholder="0"
        :disabled="currencyStore.state === CurrencyState.INCOME_PENDING"
        :value="formattedIncomeAmount"
        @change="onIncomeAmountChange"
        @keydown="preventForbiddenKeyDown"
      />

      <CurrencyInput
        class="CurrencyForm__currency"
        name="income-currency"
        :modelValue="currencyStore.argument.incomeCurrency"
        @update:modelValue="onIncomeCurrencyChange"
      />
    </fieldset>

    <div class="CurrencyForm__date-container">
      <DatePicker
        className="CurrencyForm__date"
        dateFormat="d.MM.yyyy"
        :minDate="minDate"
        :maxDate="maxDate"
        :selected="deserializeDate(currencyStore.argument.date)"
        :onChange="onDatePickerChange"
      />
    </div>

    <button
      v-if="!hasError"
      class="CurrencyForm__save-result"
      type="button"
      :disabled="!currencyStore.hasResult"
      @click="onSaveResultClick"
    >
      Сохранить результат
    </button>
  </form>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'
import {applyReactInVue, ReactComponent} from 'veaury'

const DatePicker = applyReactInVue(ReactDatePicker as ReactComponent)

import {useCurrencyStore} from '~/stores/currency-store'
import {useCurrencyHistoryStore} from '~/stores/currency-history-store'
import {Currency, CurrencyState, HISTORY_DATE_DAYS, MONEY_FRACTION_DIGITS} from '~/utils/currency-helpers'

const currencyStore = useCurrencyStore()
const currencyHistoryStore = useCurrencyHistoryStore()
const hasError = computed(() => currencyStore.state === CurrencyState.COST_ERROR || currencyStore.state === CurrencyState.INCOME_ERROR)

const formattedCostAmount = computed(() => +currencyStore.argument.costAmount?.toFixed(MONEY_FRACTION_DIGITS))
const formattedIncomeAmount = computed(() => +currencyStore.argument.incomeAmount?.toFixed(MONEY_FRACTION_DIGITS))

const maxDate = computed(() => new Date())
const minDate = computed(() => dayjs(maxDate.value).subtract(HISTORY_DATE_DAYS, `day`).toDate())

let latestConvertCurrencyArgument = [
  CurrencyState.INCOME_PENDING,
  CurrencyState.INCOME_ERROR,
  currencyStore.argument.costCurrency,
  currencyStore.argument.costAmount,
  currencyStore.argument.incomeCurrency,
  `incomeAmount`,
]

const onDatePickerChange = (date: Date) => {
  currencyStore.patchArgument({date: serializeDate(date ?? new Date())})

  convertCurrency(...latestConvertCurrencyArgument)
}

const onSaveResultClick = () => {
  if (!currencyStore.hasResult) {
    return
  }
  currencyHistoryStore.pushItem(currencyStore.result)
  currencyStore.resetResult()
}

const preventForbiddenKeyDown = (evt: KeyboardEvent) => {
  if (evt.key === KeyboardKey.PLUS || evt.key === KeyboardKey.MINUS || evt.key === KeyboardKey.E) {
    evt.preventDefault()
  }
}

const onCostCurrencyChange = (currency: Currency) => {
  currencyStore.patchArgument({costCurrency: currency})

  convertCurrency(
    CurrencyState.INCOME_PENDING,
    CurrencyState.INCOME_ERROR,
    currencyStore.argument.costCurrency,
    currencyStore.argument.costAmount,
    currencyStore.argument.incomeCurrency,
    `incomeAmount`,
  )
}

const onCostAmountChange = (evt: Event) => {
  const costAmount = currencyStore.patchArgument({costAmount: +(evt.target as HTMLInputElement).value})

  convertCurrency(
    CurrencyState.INCOME_PENDING,
    CurrencyState.INCOME_ERROR,
    currencyStore.argument.costCurrency,
    currencyStore.argument.costAmount,
    currencyStore.argument.incomeCurrency,
    `incomeAmount`,
  )
}

const onIncomeCurrencyChange = (currency: Currency) => {
  currencyStore.patchArgument({incomeCurrency: currency})

  convertCurrency(
    CurrencyState.COST_PENDING,
    CurrencyState.COST_ERROR,
    currencyStore.argument.incomeCurrency,
    currencyStore.argument.incomeAmount,
    currencyStore.argument.costCurrency,
    `costAmount`,
  )
}

const onIncomeAmountChange = (evt) => {
  currencyStore.patchArgument({incomeAmount: +evt.target.value})

  convertCurrency(
    CurrencyState.COST_PENDING,
    CurrencyState.COST_ERROR,
    currencyStore.argument.incomeCurrency,
    currencyStore.argument.incomeAmount,
    currencyStore.argument.costCurrency,
    `costAmount`,
  )
}

const convertCurrency = async (
  pendingState: CurrencyState,
  errorState: CurrencyState,
  inputCurrency: Currency,
  inputAmount: number,
  outputCurrency: Currency,
  outputAmountKey: `costAmount` | `incomeAmount`,
) => {
  latestConvertCurrencyArgument = [
    pendingState,
    errorState,
    inputCurrency,
    inputAmount,
    outputCurrency,
    outputAmountKey,
  ]
  return currencyStore.convertCurrency(
    pendingState,
    errorState,
    {
      date: currencyStore.argument.date,
      inputCurrency,
      inputAmount,
      outputCurrency,
    },
    (currentArgument, outputAmount) => {
      currencyStore.patchArgument({[outputAmountKey]: outputAmount})
      currencyStore.saveResult()
    },
  )
}
</script>

<style lang="scss">
.CurrencyForm {
  @include container();

  margin-top: 60px;
  margin-bottom: 93px;

  @include tablet {
    margin-top: 30px;
    margin-bottom: 67px;
  }

  @include mobile {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  display: grid;
  grid-template-areas:
    "title title title"
    "cost arrows income"
    ". . ."
    "date . submit";
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: auto auto 85px auto;
  align-items: start;

  @include tablet-mobile {
    grid-template-areas:
      "title"
      "cost"
      "."
      "arrows"
      "income"
      "."
      "date"
      "."
      "submit";
    grid-template-columns: auto;
    grid-template-rows: auto auto 32px auto auto 32px auto 32px;
  }

  &::before {
    content: "";
    display: block;
    grid-area: arrows;
    align-self: center;
    width: 56px;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 16px;

    background: transparent url("@/assets/icons/currency-arrows-icon.svg") no-repeat center center / 56px 36px;

    @include tablet-mobile {
      display: none;
    }
  }
}

.CurrencyForm__title {
  grid-area: title;
}

.CurrencyForm__error-container {
  grid-area: submit;
  box-sizing: border-box;
  width: 390px;
  margin-left: auto;
  padding: 12px 30px 13px;
  display: grid;
  grid-gap: 5px;

  font-size: 14px;

  background-color: $pastel-red-color;
  border: 1px solid $red-color;
  border-radius: 4px;

  &:empty {
    margin: 0;
    padding: 0;

    border: none;
  }
}

.CurrencyForm__error-message {
  margin: 0;
  padding: 0;

  text-align: center;
}

.CurrencyForm__fieldset {
  margin: 0;
  padding: 0;

  border: none;

  &--cost {
    grid-area: cost;
  }

  &--income {
    grid-area: income;
  }
}

.CurrencyForm__label {
  display: block;
  margin-bottom: 23px;

  font-weight: 500;
  font-size: 22px;
  line-height: 1.4;
}

.CurrencyForm__amount {
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  width: calc(100% - 15px - 120px);
  padding: 12px 30px 13px;
  margin-right: 15px;

  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;

  appearance: textfield;
  color: $black-color;
  border: 1px solid $primary-color;
  border-radius: 4px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }

  @include tablet-mobile {
    width: calc(100% - (15px + 120px));
  }
}

.CurrencyForm__currency {
  display: inline-block;
  vertical-align: top;
  width: 120px;
  padding: 7px 17px 9px;

  font-size: 30px;
  line-height: 1.4;
  text-transform: uppercase;

  appearance: none;
  color: $black-color;
  border: 1px solid $primary-color;
  border-radius: 4px;
  background: transparent url("@/assets/icons/currency-input-arrow-icon.svg") no-repeat 84px center / 18px 11px;
}

.CurrencyForm__date-container {
  grid-area: date;
}

.CurrencyForm__date {
  box-sizing: border-box;
  width: 390px;
  margin-right: auto;
  padding: 18px 117px 13px;

  font-size: 24px;
  text-align: center;

  background: transparent url("@/assets/icons/currency-calendar-icon.svg") no-repeat calc(100% - 20px) 5px / 41px 44px;
  border: 1px solid $primary-color;
  border-radius: 4px;

  @include tablet-mobile {
    width: 100%;
  }
}

.CurrencyForm__save-result {
  @include button();

  grid-area: submit;
  padding: 18px 102px 17px 101px;
  margin-left: auto;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;

  &:disabled {
    pointer-events: none;
    filter: grayscale(100%);
    opacity: 0.5;
  }

  @include tablet-mobile {
    width: 100%;
  }
}
</style>
