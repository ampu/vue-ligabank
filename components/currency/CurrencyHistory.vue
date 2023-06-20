<template>
  <section v-if="currencyHistoryStore.hasItems" class="CurrencyHistory">
    <h2 class="CurrencyHistory__title">История конвертаций</h2>

    <ul class="CurrencyHistory__list-wrapper">
      <li
        v-for="[chunkKey, chunkItems] in itemChunks"
        :key="chunkKey"
        class="CurrencyHistory__list-wrapper-item"
      >
        <ul class="CurrencyHistory-list">
          <CurrencyHistoryItem
            v-for="item of chunkItems"
            :key="item.id"
            class="CurrencyHistory-list__item"
            :item="item"
          />
        </ul>
      </li>
    </ul>

    <button
      class="CurrencyHistory__submit"
      type="button"
      @click="currencyHistoryStore.reset"
    >
      Очистить историю
    </button>
  </section>
</template>

<script setup lang="ts">
import {chunk} from 'lodash'

import {useCurrencyHistoryStore} from '~/stores/currency-history-store'
import {CurrencyArgument} from '~/utils/currency-helpers'

const HISTORY_ITEMS_CAPACITY = 10
const HISTORY_COLUMNS_COUNT = 2

const currencyHistoryStore = useCurrencyHistoryStore()

const itemChunks = computed(() => {
  const chunks = chunk(currencyHistoryStore.items, Math.round(HISTORY_ITEMS_CAPACITY / HISTORY_COLUMNS_COUNT))
  return chunks.map((chunkItems) => [chunkItems.map((item) => item.id).join(`,`), chunkItems]) as Array<[string, CurrencyArgument[]]>
})
</script>

<style lang="scss">
.CurrencyHistory {
  @include container();

  box-sizing: border-box;
  padding: 43px 70px;

  background-color: $alternative-color;

  margin-bottom: 110px;

  @include tablet {
    margin-bottom: 80px;
  }

  @include mobile {
    margin-bottom: 60px;
  }
}

.CurrencyHistory__title {
  margin-top: 0;
  margin-bottom: 13px;

  font-weight: 500;
  font-size: 28px;
  line-height: 1.4;
}

.CurrencyHistory__list-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
}

.CurrencyHistory__list-wrapper-item {
  position: relative;
  display: flex;
  padding: 37px 0 48px;

  &:nth-of-type(2n+1) {
    justify-content: flex-start;
  }

  &:nth-of-type(2n+2) {
    justify-content: flex-end;

    &::before {
      content: "";
      display: block;
      width: 1px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;

      background-color: $currency-converter-history-list-border-color;
      box-shadow: 0 4px 4px $currency-converter-history-list-border-shadow-color;
    }
  }
}

.CurrencyHistory__submit {
  @include button();

  margin: 0;
  margin-right: auto;
  padding: 16px 29px 17px 28px;

  @include tablet-mobile {
    width: 100%;
  }
}

.CurrencyHistory-list {
  list-style: none;
  margin: 0;
  margin-bottom: auto;
  padding: 0;
  display: grid;
  grid-template-columns: 91px 106px min-content 117px;
  grid-column-gap: 12px;
  grid-row-gap: 23px;
  align-items: center;
}

.CurrencyHistory-list__item {
  display: contents;
}
</style>
