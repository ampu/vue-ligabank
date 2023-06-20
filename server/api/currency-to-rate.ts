import {serializeDate} from '../../utils/date-helpers'
import {currencyClient} from '../utils/currency-client'

export default defineEventHandler(async (evt) => {
  const {req, res} = evt.node
  const query = getQuery(evt)
  const date = serializeDate((query[`date`] as string) ?? new Date())
  const currencyToRate = await currencyClient.getCurrencyToRate(date)

  return {
    ok: true,
    currencyToRate,
  }
})


