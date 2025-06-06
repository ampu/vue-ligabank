import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import 'dayjs/locale/ru.js'

const SERIALIZATION_DATE_FORMAT = `YYYY-MM-DD`
const USER_DATE_FORMAT = `D.MM.YYYY`
const CURRENCY_PROVIDER_DATE_FORMAT = `DD/MM/YYYY`

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale(`ru`)

export const serializeDate = (date: number | string | Date) => {
  return dayjs(date).format(SERIALIZATION_DATE_FORMAT)
}

export const deserializeDate = (date: string) => {
  return dayjs(date).toDate()
}

export const formatDateForUser = (date: string) => {
  return dayjs(date).format(USER_DATE_FORMAT)
}

export const formatDateForCurrencyProvider = (date: string) => {
  return dayjs(date).format(CURRENCY_PROVIDER_DATE_FORMAT)
}
