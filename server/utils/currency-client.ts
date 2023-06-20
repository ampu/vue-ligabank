import axios, {AxiosInstance} from 'axios'
import {JSDOM} from 'jsdom'

import {Currency} from '../../utils/currency-helpers'
import {serializeDate, formatDateForCurrencyProvider} from '../../utils/date-helpers'

const REQUEST_TIMEOUT = 5000
const BASE_URL = `https://www.cbr.ru/scripts`

export type CurrencyRate = {
  costInRubles: number
  nominalCount: number
}

export type CurrencyToRate = Record<Currency, CurrencyRate>

const DOMParser = new JSDOM().window.DOMParser

class CurrencyClient {
  _client: AxiosInstance
  _dateToCurrencyToRate: Record<string, Record<Currency, CurrencyRate> | Promise<Record<Currency, CurrencyRate>>>

  constructor() {
    this._client = axios.create({
      baseURL: BASE_URL,
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
      const currencyToRateMap = await promise

      this._dateToCurrencyToRate[cacheKey] = currencyToRateMap

      return currencyToRateMap
    } catch (error) {
      delete this._dateToCurrencyToRate[cacheKey]

      throw error
    }
  }

  async _doGetCurrencyToRate(date: string): Promise<Record<Currency, CurrencyRate>> {
    const {data, request} = await this._client.get(`/XML_daily.asp`, {
      params: {
        [`date_req`]: formatDateForCurrencyProvider(date),
      },
    })

    const parser = new DOMParser()
    const xmlDocument = parser.parseFromString(data, `text/xml`)

    const nodes = xmlDocument.querySelectorAll(`Valute`)

    return Array.prototype.reduce.call(nodes, (map, node: Element) => {
      const charCodeNode = node.querySelector(`CharCode`)
      const nominalNode = node.querySelector(`Nominal`)
      const valueNode = node.querySelector(`Value`)

      if (charCodeNode && nominalNode && valueNode) {
        const currency = charCodeNode.textContent!.toLowerCase() as Currency
        const nominalCount = +nominalNode.textContent!
        const costInRubles = +valueNode.textContent!.replace(`,`, `.`)

        if (currency && Number.isFinite(nominalCount) && Number.isFinite(costInRubles)) {
          (map as CurrencyToRate)[currency] = {nominalCount, costInRubles}
        }
      }
      return map
    }, {
      [Currency.RUB]: {nominalCount: 1, costInRubles: 1},
    }) as CurrencyToRate
  }
}

export const currencyClient = new CurrencyClient()
