import {defineStore} from 'pinia'

import {Currency, CurrencyArgument} from '~/utils/currency-helpers'
import {CurrencyState} from '~/utils/currency-state'
import {generateRequestId} from '~/utils/credit-helpers'

type InputData = {
  date: string,
  inputCurrency: Currency,
  inputAmount: number,
  outputCurrency: Currency,
}

export const useCurrencyStore = defineStore(`currency`, () => {
  const state = ref()

  const argument = ref<CurrencyArgument>({} as CurrencyArgument)

  const result = ref<CurrencyArgument>()

  const patchArgument = (argumentPatch: Record<string, unknown>) => {
    argument.value = Object.assign({}, argument.value, {id: generateRequestId()}, argumentPatch)
    resetResult()
  }

  const hasResult = computed(() => result.value !== undefined)

  const saveResult = () => {
    result.value = {...argument.value}
  }

  const resetResult = () => {
    result.value = undefined
  }

  const resetAll = () => {
    state.value = CurrencyState.DEFAULT

    patchArgument({
      date: serializeDate(new Date()),
      costCurrency: Currency.RUB,
      costAmount: 0,
      incomeCurrency: Currency.USD,
      incomeAmount: 0,
    })

    resetResult()
  }

  const convertCurrency = async (
    pendingState: CurrencyState,
    errorState: CurrencyState,
    inputData: InputData,
    onSuccess: (currencyArgument: CurrencyArgument, outputAmount: number) => void,
  ) => {
    const startArgument = {...argument.value}

    const quickOutputAmount = quicklyGetOutputAmount(inputData.inputCurrency, inputData.inputAmount, inputData.outputCurrency)

    if (quickOutputAmount !== undefined) {
      onSuccess(startArgument, quickOutputAmount)
      return
    }

    state.value = pendingState

    try {
      const currencyToRateMap = await currencyClient.getCurrencyToRate(inputData.date)

      const endArgument = {...argument.value}
      if (startArgument.id === endArgument.id) {

        const outputAmount = getOutputAmount(currencyToRateMap, inputData.inputCurrency, inputData.inputAmount, inputData.outputCurrency)
        if (outputAmount === undefined) {
          state.value = errorState
          return
        }

        state.value = CurrencyState.DEFAULT
        onSuccess(endArgument, outputAmount)
      }
    } catch (error) {
      state.value = errorState
    }
  }

  resetAll()

  return {
    state,
    argument,
    result,
    resetAll,
    patchArgument,
    hasResult,
    saveResult,
    resetResult,
    convertCurrency,
  }
})
