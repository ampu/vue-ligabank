<template>
  <FocusTrap :active="isActive">
    <header :class="[`AppHeader`, isActive && `active`]">
      <nav class="AppHeader__navigation">
        <button class="AppHeader__toggle-button" type="button" @click="toggleActive">
          <HeaderToggleButtonIcon/>
          <span class="visually-hidden">Открыть меню</span>
        </button>

        <AppLogo class="AppHeader__logo"/>

        <SiteNavigation
          isHeader
          listClassName="AppHeader__site-navigation-list"
          itemClassName="AppHeader__site-navigation-item"
        />

        <UserNavigation
          :isActive="isActive"
          listClassName="AppHeader__user-navigation-list"
          itemClassName="AppHeader__user-navigation-item"
          @signIn="activateSignIn"
        />

        <button class="AppHeader__close-button" type="button" @click="deactivate">
          <HeaderCloseButtonIcon/>
          <span class="visually-hidden">Закрыть меню</span>
        </button>
      </nav>

      <SignIn v-if="isActiveSignIn" @close="deactivateSignIn"/>
    </header>
  </FocusTrap>
</template>

<script setup lang="ts">
import {FocusTrap} from 'focus-trap-vue'

import HeaderToggleButtonIcon from '@/assets/icons/header-toggle-icon.svg?component'
import HeaderCloseButtonIcon from '@/assets/icons/header-close-icon.svg?component'

const [isActive, , deactivate, toggleActive] = useMobileModal()

const [isActiveSignIn, activateSignIn, deactivateSignIn] = useActive(false)
</script>

<style lang="scss">
.AppHeader {
  background-color: $alternative-color;

  &.active {
    @include mobile {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      overflow: auto;
    }
  }
}

.AppHeader__navigation {
  @include container;

  padding-bottom: 35px;
  display: grid;
  grid-template-columns: rubber--desktop(150px + 109px - 30px) auto 1fr;
  grid-column-gap: 30px;
  justify-content: space-between;
  align-items: start;

  @include tablet-mobile {
    padding-bottom: 22px;
    grid-template-columns: min-content auto 1fr;
    grid-column-gap: 30px;
  }

  @include mobile {
    padding-bottom: 13px;
    grid-column-gap: 14px;
  }
}

.AppHeader__toggle-button {
  order: -1;
  margin-top: #{18px - 5px};
  margin-right: -5px;
  margin-left: -5px;
  margin-bottom: 0;
  padding: 5px;
  display: none;

  cursor: pointer;
  background-color: transparent;
  border: none;

  @include mobile {
    display: flex;
  }
}

.AppHeader__close-button {
  justify-self: end;
  margin-top: #{15px - 5px};
  margin-right: -5px;
  margin-left: -5px;
  margin-bottom: 0;
  padding: 5px;
  display: none;

  cursor: pointer;
  background-color: transparent;
  border: none;
}

.AppHeader.active .AppHeader__close-button {
  @include mobile {
    display: flex;
  }
}

.AppHeader__logo {
  margin-top: 24px;

  @include tablet {
    margin-top: 23px;
    margin-right: 36px;
  }

  @include mobile {
    margin-top: 14px;
    margin-right: 0;
  }
}

.AppHeader__site-navigation-list {
  margin-top: 34px;
  margin-left: -24px;
  margin-bottom: -10px;

  font-weight: 500;

  @include tablet-mobile {
    margin-top: 26px;
    margin-left: -20px;

    font-size: 14px;
  }

  @include mobile {
    display: none;
  }
}

.AppHeader.active .AppHeader__site-navigation-list {
  @include mobile {
    order: 1;
    grid-column: 1 / -1;
    margin: 0;
    margin-top: 42px;
    display: flex;
    flex-flow: column;
    align-items: stretch;

    font-size: 16px;
  }
}

.AppHeader__site-navigation-item {
  margin-left: 24px;
  margin-bottom: 10px;

  @include tablet-mobile {
    margin-left: 20px;
  }
}

.AppHeader.active .AppHeader__site-navigation-item {
  @include mobile {
    margin: 0;
    margin-bottom: -1px;
    padding: 19px 15px;

    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
}

.AppHeader__user-navigation-list {
  margin-top: 34px;
  margin-left: -25px;
  margin-bottom: -10px;

  @include tablet-mobile {
    margin-top: 23px;
    margin-left: -20px;
  }

  @include mobile {
    margin-top: 16px;
  }
}

.AppHeader.active .AppHeader__user-navigation-list {
  @include mobile {
    order: 1;
    grid-column: -1 / 1;
    margin: 0;
    display: flex;
    flex-flow: column;
    align-items: stretch;
  }
}

.AppHeader__user-navigation-item {
  margin-left: 25px;
  margin-bottom: 10px;

  @include tablet-mobile {
    margin-left: 20px;
  }
}

.AppHeader.active .AppHeader__user-navigation-item {
  @include mobile {
    margin: 0;
    margin-bottom: -1px;
    padding: 17px 15px;

    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
}

.AppHeader.active .AppHeader__user-navigation-list svg {
  @include mobile {
    margin-right: 10px;
  }
}

.AppHeader.active .AppHeader__user-navigation-list span {
  @include mobile {
    display: flex;
  }
}
</style>
