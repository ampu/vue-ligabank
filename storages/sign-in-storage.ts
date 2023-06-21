const SIGN_IN_STORAGE_KEY = `ligabank-sign-in`;

class SignInStorage {
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

export const signInStorage = new SignInStorage(localStorage, SIGN_IN_STORAGE_KEY);
