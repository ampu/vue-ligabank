<template>
  <li class="CurrencyHistoryItem">
    <span class="CurrencyHistoryItem__date">{{ formatDateForUser(item.date) }}</span>
    <span class="CurrencyHistoryItem__cost">{{ formattedCostAmount }}&nbsp;{{ item.costCurrency }}</span>
    <span class="CurrencyHistoryItem__arrow"/>
    <span class="CurrencyHistoryItem__income">{{ formattedIncomeAmount }}&nbsp;{{ item.incomeCurrency }}</span>
  </li>
</template>

<script setup lang="ts">
import {CurrencyArgument, formatMoney} from '~/utils/currency-helpers'

const props = defineProps<{
  item: CurrencyArgument,
}>()

const formattedCostAmount = computed(() => formatMoney(props.item.costAmount))
const formattedIncomeAmount = computed(() => formatMoney(props.item.incomeAmount))
</script>

<style lang="scss">
.CurrencyHistoryItem {
  font-size: 18px;
  line-height: 1.3;
  word-wrap: break-word;
}

.CurrencyHistoryItem__date {
  text-align: right;
}

.CurrencyHistoryItem__cost {
  text-align: right;
  text-transform: uppercase;
}

.CurrencyHistoryItem__arrow {
  width: 41px;
  height: 18px;

  background: transparent url("@/assets/icons/currency-history-item-arrow-icon.svg") no-repeat center center / 41px 18px;
}

.CurrencyHistoryItem__income {
  text-align: left;
  text-transform: uppercase;
}
</style>
