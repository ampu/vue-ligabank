const CURRENCY_HISTORY_STORE_KEY = `akimutin_ligabank-v1__history`

class CurrencyHistoryStore {
  constructor(
    private _storage: Storage,
    private _itemsKey: string
  ) {
  }

  getItems(defaultValue = []) {
    try {
      return JSON.parse(this._storage.getItem(this._itemsKey) ?? ``) || defaultValue
    } catch (_error) {
      return defaultValue
    }
  }

  setItems(items: unknown[]) {
    try {
      this._storage.setItem(this._itemsKey, JSON.stringify(items))
      return true
    } catch (_error) {
      return false
    }
  }

  pushItem(item: unknown) {
    this.setItems([item, ...this.getItems()])
  }

  reset() {
    this.setItems([])
  }
}

export const currencyHistory = new CurrencyHistoryStore(localStorage, CURRENCY_HISTORY_STORE_KEY)
