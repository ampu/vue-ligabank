import {defineStore} from 'pinia'
import {currencyHistoryStorage} from '~/storages/currency-history-storage'
import {CurrencyArgument} from '~/utils/currency-helpers'

export const useCurrencyHistoryStore = defineStore(`currency-history`, () => {
  const items = ref<CurrencyArgument[]>(currencyHistoryStorage.getItems())

  const hasItems = computed(() => items.value.length > 0)

  const pushItem = (item: unknown) => {
    currencyHistoryStorage.pushItem(item)
    items.value = currencyHistoryStorage.getItems()
  }

  const reset = () => {
    currencyHistoryStorage.reset()
    items.value = currencyHistoryStorage.getItems()
  }

  return {
    items,
    hasItems,
    pushItem,
    reset,
  }
})
