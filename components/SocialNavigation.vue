<template>
  <ul class="SocialNavigation">
    <li
      v-for="item of SOCIAL_NAVIGATION_ITEMS"
      :key="item.href"
      class="SocialNavigation__item"
    >
      <a
        class="SocialNavigation__link"
        :href="item.href"
        :aria-label="item.ariaLabel"
      >
        <component :is="item.icon"/>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import FacebookIcon from '@/assets/icons/facebook-icon.svg?component'
import InstagramIcon from '@/assets/icons/instagram-icon.svg?component'
import TwitterIcon from '@/assets/icons/twitter-icon.svg?component'
import YoutubeIcon from '@/assets/icons/youtube-icon.svg?component'

const SOCIAL_NAVIGATION_ITEMS = [
  {ariaLabel: `Группа в Facebook.`, href: `https://facebook.com/`, icon: FacebookIcon},
  {ariaLabel: `Аккаунт в Instagram.`, href: `https://instagram.com/`, icon: InstagramIcon},
  {ariaLabel: `Лента в Twitter.`, href: `https://twitter.com/`, icon: TwitterIcon},
  {ariaLabel: `Канал на YouTube.`, href: `https://youtube.com/`, icon: YoutubeIcon},
]
</script>

<style lang="scss">
.SocialNavigation {
  list-style: none;
  margin: 0;
  margin-top: 4px;
  margin-left: -15px;
  margin-bottom: -15px;
  padding: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;

  @include tablet-mobile {
    margin-top: 0;
    margin-left: -20px;
  }
}

.SocialNavigation__item {
  margin-left: 15px;
  margin-bottom: 15px;

  @include tablet-mobile {
    margin-left: 20px;
  }
}

.SocialNavigation__link {
  display: flex;

  &:hover,
  &:focus {
    path {
      fill: $primary-active-color;
    }
  }

  &:active {
    opacity: 0.7;
  }
}
</style>
