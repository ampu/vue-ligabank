const CREDIT_REQUEST_DATA = {
  storeKey: `akimutin-ligabank__credit-request`,
  defaultMap: {id: 1},
}

class CreditRequestStore {

  constructor(
    private _storage: Storage,
    private _mapKey: string,
  ) {
  }

  getMap(defaultMap = CREDIT_REQUEST_DATA.defaultMap): {id: number} {
    try {
      const value = this._storage.getItem(this._mapKey) ?? ``
      return JSON.parse(value) || defaultMap
    } catch (_error) {
      return defaultMap
    }
  }

  patchMap(patch: object) {
    try {
      const newMap = {...this.getMap(), ...patch}
      this._storage.setItem(this._mapKey, JSON.stringify(newMap))
      return true
    } catch (_error) {
      return false
    }
  }
}

export const creditRequestStore = new CreditRequestStore(localStorage, CREDIT_REQUEST_DATA.storeKey)
