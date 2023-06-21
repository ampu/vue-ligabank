const CREDIT_REQUEST_STORAGE_KEY = `ligabank-credit-request`
const CREDIT_REQUEST_DEFAULT_MAP = {id: generateRequestId()}

class CreditRequestStorage {
  constructor(
    private _storage: Storage,
    private _mapKey: string,
  ) {
  }

  getMap(defaultMap = CREDIT_REQUEST_DEFAULT_MAP): {id: string} {
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

export const creditRequestStorage = new CreditRequestStorage(localStorage, CREDIT_REQUEST_STORAGE_KEY)
