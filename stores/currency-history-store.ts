import {defineStore} from 'pinia'
import {currencyHistory} from '~/utils/currency-history'
import {CurrencyArgument} from '~/utils/currency-helpers'

export const useCurrencyHistoryStore = defineStore(`currency-history`, () => {
  const items = ref<CurrencyArgument[]>(currencyHistory.getItems())

  const hasItems = computed(() => items.value.length > 0)

  const pushItem = (item: unknown) => {
    currencyHistory.pushItem(item)
    items.value = currencyHistory.getItems()
  }

  const reset = () => {
    currencyHistory.reset()
    items.value = currencyHistory.getItems()
  }

  return {
    items,
    hasItems,
    pushItem,
    reset,
  }
})
