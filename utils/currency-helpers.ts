export const HISTORY_DATE_DAYS = 7
export const MONEY_FRACTION_DIGITS = 4

export enum Currency {
  RUB = `rub`,
  USD = `usd`,
  EUR = `eur`,
  GBP = `gbp`,
  CNY = `cny`,
}

export const CURRENCIES = Object.values(Currency)

export enum CurrencyState {
  DEFAULT = `default`,
  COST_PENDING = `cost pending`,
  COST_ERROR = `cost error`,
  INCOME_PENDING = `income pending`,
  INCOME_ERROR = `income error`,
}

export type CurrencyArgument = {
  id: string,
  date: string,
  costCurrency: Currency,
  costAmount: number,
  incomeCurrency: Currency,
  incomeAmount: number,
}

const moneyFormat = new Intl.NumberFormat(`ru`, {
  maximumFractionDigits: MONEY_FRACTION_DIGITS,
  useGrouping: false,
})

export const formatMoney = (amount: number) => {
  return moneyFormat.format(amount)
}

export const quicklyGetOutputAmount = (
  inputCurrency: Currency,
  inputAmount: number,
  outputCurrency: Currency,
) => {
  if (inputAmount === 0) {
    return 0
  }

  return inputCurrency === outputCurrency
    ? inputAmount
    : undefined
}

export const getOutputAmount = (
  currencyToRateMap: Record<Currency, { costInRubles: number, nominalCount: number }>,
  inputCurrency: Currency,
  inputAmount: number,
  outputCurrency: Currency,
) => {
  const inputRate = currencyToRateMap[inputCurrency]
  if (!inputRate) {
    return undefined
  }

  const outputRate = currencyToRateMap[outputCurrency]
  if (!outputRate) {
    return undefined
  }

  const inputSum = inputRate.costInRubles / inputRate.nominalCount * inputAmount

  return inputSum / outputRate.costInRubles * outputRate.nominalCount
}


