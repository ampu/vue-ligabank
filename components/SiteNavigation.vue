<template>
  <ul :class="[`SiteNavigation`, listClassName]">
    <template v-for="item of SITE_NAVIGATION_ITEMS">
      <li
        v-if="(isHeader && item.isHeader) || (isFooter && item.isFooter)"
        :key="item.path"
        :class="[`SiteNavigation__item`, itemClassName]"
      >
        <NuxtLink
          :to="item.path"
          class="SiteNavigation__link"
          activeClassName="SiteNavigation__link--active"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
const SITE_NAVIGATION_ITEMS = [
  {path: LocalPath.SERVICES, title: `Услуги`, isHeader: true, isFooter: true},
  {path: LocalPath.CREDIT_CALCULATOR, title: `Рассчитать кредит`, isHeader: true, isFooter: true},
  {path: LocalPath.CURRENCY, title: `Конвертер валют`, isHeader: true, isFooter: false},
  {path: LocalPath.CONTACTS, title: `Контакты`, isHeader: true, isFooter: true},
  {path: LocalPath.ASK_QUESTION, title: `Задать вопрос`, isHeader: false, isFooter: true},
]

const props = defineProps<{
  isHeader?: boolean,
  isFooter?: boolean,
  listClassName: string,
  itemClassName: string,
}>()
</script>

<style lang="scss">
.SiteNavigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
}

.SiteNavigation__link {
  white-space: nowrap;
  font: inherit;
  text-decoration: none;

  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: $primary-active-color;
  }

  &--active {
    cursor: default;

    color: $primary-active-color;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
