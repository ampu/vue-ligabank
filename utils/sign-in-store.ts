const SIGN_IN_STORE_KEY = `akimutin-ligabank__sign-in`;

class SignInStore {
  constructor(
    private _storage: Storage,
    private _mapKey: string,
  ) {
  }

  /**
   * @param {object} defaultMap
   * @return {object}
   */
  getMap(defaultMap = {}) {
    try {
      const value = this._storage.getItem(this._mapKey) ?? ``
      return JSON.parse(value) || defaultMap;
    } catch (_error) {
      return defaultMap;
    }
  }

  patchMap(patch: object) {
    try {
      const newMap = {...this.getMap(), ...patch};
      this._storage.setItem(this._mapKey, JSON.stringify(newMap));
      return true;
    } catch (_error) {
      return false;
    }
  }
}

export const signInStore = new SignInStore(localStorage, SIGN_IN_STORE_KEY);
