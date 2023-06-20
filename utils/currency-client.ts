import axios, {AxiosInstance} from 'axios'

import {Currency} from '~/utils/currency-helpers'
import {serializeDate, formatDateForCurrencyProvider} from '~/utils/date-helpers'

const REQUEST_TIMEOUT = 5000

export type CurrencyRate = {
  costInRubles: number
  nominalCount: number
}

export type CurrencyToRate = Record<Currency, CurrencyRate>

class CurrencyClient {
  _client: AxiosInstance
  _dateToCurrencyToRate: Record<string, Record<Currency, CurrencyRate> | Promise<Record<Currency, CurrencyRate>>>

  constructor() {
    this._client = axios.create({
      timeout: REQUEST_TIMEOUT,
    })

    this._dateToCurrencyToRate = {}
  }

  async getCurrencyToRate(date: string) {
    const cacheKey = serializeDate(date)

    if (this._dateToCurrencyToRate[cacheKey]) {
      return this._dateToCurrencyToRate[cacheKey]
    }

    const promise = this._doGetCurrencyToRate(date)

    this._dateToCurrencyToRate[cacheKey] = promise

    try {
      const currencyToRate = await promise

      this._dateToCurrencyToRate[cacheKey] = currencyToRate

      return currencyToRate
    } catch (error) {
      delete this._dateToCurrencyToRate[cacheKey]

      throw error
    }
  }

  async _doGetCurrencyToRate(date: string): Promise<Record<Currency, CurrencyRate>> {
    const {data} = await this._client.get(LocalPath.CURRENCY_TO_RATE, {
      params: {
        [`date`]: serializeDate(date),
      },
    })
    return data.currencyToRate as CurrencyToRate
  }
}

export const currencyClient = new CurrencyClient()
