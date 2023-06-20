<template>
  <NuxtLink
    :to="LocalPath.INDEX"
    :class="[`AppLogo`, isExtended && `AppLogo--extended`, props.class]"
    activeClass="AppLogo--active"
  >
    <img v-if="isExtended" :src="extendedDesktopLogo" alt="Логотип «ЛИГА Банк»." width="150" height="31"/>
    <APicture v-if="!isExtended" :src="desktopLogo" alt="Логотип «ЛИГА Банк».">
      <source :media="MediaQuery.MOBILE" :srcSet="mobileLogo"/>
      <source :media="MediaQuery.TABLET" :srcSet="tabletLogo"/>
    </APicture>
  </NuxtLink>
</template>

<script setup lang="ts">
import desktopLogo from '~/assets/images/logo--desktop.svg';
import tabletLogo from '~/assets/images/logo--tablet.svg';
import mobileLogo from '~/assets/images/logo--mobile.svg';
import extendedDesktopLogo from '~/assets/images/logo--extended-desktop.svg';

const props = defineProps<{
  isExtended?: boolean,
  class: string,
}>()
</script>

<style lang="scss">
.AppLogo {
  &--active {
    pointer-events: none;
  }

  &:active {
    opacity: 0.7;
  }
}

.AppLogo img {
  width: 150px;
  height: 31px;
  display: block;

  @include tablet {
    width: 133px;
    height: 24px;
  }

  @include mobile {
    width: 115px;
    height: 19px;
  }
}

.AppLogo--extended img {
  width: 150px;
  height: 31px;
  display: block;
}
</style>
