<template>
  <ul :class="[`UserNavigation`, isActive && `active`, listClassName]">
    <li :class="[`UserNavigation__item`, itemClassName]">
      <NuxtLink
        :to="LocalPath.SIGN_IN"
        class="UserNavigation__link UserNavigation__link--sign-in"
        activeClass="UserNavigation__link--active"
        @click.capture.prevent
        @click="onSignIn"
      >
        <SignInIcon/>
        <span>Войти в Интернет-банк</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import SignInIcon from '@/assets/icons/sign-in-icon.svg?component';

const props = defineProps<{
  isActive: boolean,
  listClassName: string,
  itemClassName: string,
}>()

const emit = defineEmits<{
  (type: `signIn`),
}>()

const onSignIn = () => {
  emit(`signIn`)
}
</script>

<style lang="scss">
.UserNavigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
}

.UserNavigation__link {
  display: flex;
  align-items: center;

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

.UserNavigation__link svg {
  margin-right: 10px;

  @include tablet-mobile {
    margin-right: 0;
  }
}

.UserNavigation__link span {
  @include tablet-mobile {
    display: none;
  }
}

.UserNavigation__link:active path,
.UserNavigation__link--active path {
  fill: $primary-active-color;
}

.UserNavigation__link--sign-in svg {
  width: 20px;
  height: 22px;

  @include mobile {
    width: 14px;
    height: 16px;
  }
}

.UserNavigation.active .UserNavigation__link--sign-in svg {
  @include mobile {
    width: 20px;
    height: 22px;
  }
}
</style>
