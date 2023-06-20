import dayjs from 'dayjs'
import _ from 'lodash'

import './date-helpers'
import {Constraint} from '~/utils/credit-helpers'

const FORMAT_FLOOR_CEILING_MULTIPLIER = 100

const RUBLES_SUFFIX_DATA = {
  hundredDivisor: 100,
  hundredRange: {min: 11, max: 14},
  tenDivisor: 10,
  singularTenRange: {min: 1, max: 1},
  exceptionalTenRange: {min: 2, max: 4},
}

export const PERCENTAGE_CONSTRAINT: Constraint = {
  min: 0,
  max: 100,
  step: 1,
}

const integerFormat = new Intl.NumberFormat(`ru`, {maximumFractionDigits: 0})
const floatFormat = new Intl.NumberFormat(`ru`, {minimumFractionDigits: 2, maximumFractionDigits: 2})

export const formatInteger = (value: number) => {
  return integerFormat.format(Math.ceil(value))
}

export const formatFloat = (value: number) => {
  return floatFormat.format(Math.ceil(value * FORMAT_FLOOR_CEILING_MULTIPLIER) / FORMAT_FLOOR_CEILING_MULTIPLIER)
}

export const formatYearsSuffix = (numberOfYears: number) => {
  if (!numberOfYears) {
    return ` лет`
  }
  return dayjs.duration(numberOfYears, `years`)
    .humanize()
    .replace(/\d+/, ``)
    .replace(/^\s*/, ` `)
}

export const formatRublesSuffix = (value: number) => {
  const hundredRemainder = value % RUBLES_SUFFIX_DATA.hundredDivisor
  if (RUBLES_SUFFIX_DATA.hundredRange.min <= hundredRemainder && hundredRemainder <= RUBLES_SUFFIX_DATA.hundredRange.max) {
    return ` рублей`
  }

  const tenRemainder = value % RUBLES_SUFFIX_DATA.tenDivisor
  if (RUBLES_SUFFIX_DATA.singularTenRange.min <= tenRemainder && tenRemainder <= RUBLES_SUFFIX_DATA.singularTenRange.max) {
    return ` рубль`
  }
  if (RUBLES_SUFFIX_DATA.exceptionalTenRange.min <= tenRemainder && tenRemainder <= RUBLES_SUFFIX_DATA.exceptionalTenRange.max) {
    return ` рубля`
  }
  return ` рублей`
}

export const coerceArrayIndex = (index: number, items: unknown[]) => {
  return _.clamp(index, 0, items.length - 1)
}

export const coerceByConstraint = (value: number, {min, max}: Constraint) => {
  return _.clamp(value, min, max)
}

export const isValidByConstraint = (value: number, {min, max}: Constraint) => {
  return min <= value && value <= max
}
