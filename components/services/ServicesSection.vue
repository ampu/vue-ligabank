<template>
  <section
    class="services"
    :data-navigation-id="LocalPath.SERVICES"
  >
    <h2 class="visually-hidden">Услуги</h2>

    <ul ref="controlsRef" class="services__controls">
      <li
        v-for="(service, serviceIndex) of SERVICES"
        :key="service.key"
      >
        <button
          type="button"
          :class="{active: serviceIndex === activeSlideIndex}"
          :data-index="serviceIndex"
          @click="onControlButtonClick"
          @focus="onControlButtonFocus"
          @keydown="onControlButtonKeyDown"
        >
          <component :is="service.icon"/>
          <span>{{ service.title }}</span>
        </button>
      </li>
    </ul>

    <ul ref="itemsRef" class="services__items">
      <li
        v-for="(service, serviceIndex) of SERVICES"
        :key="service.key"
        :class="{active: serviceIndex === activeSlideIndex}"
        @touchstart="onSlideTouchStart"
        @touchmove="onSlideTouchMove"
        @touchend="onSlideTouchEnd"
        @keydown="onItemKeyDown"
      >
        <component :is="service.component"/>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {useSlider} from '~/composables/use-slider'
import {useTabs} from '~/composables/use-tabs'

import {ServicesCredits, ServicesDeposits, ServicesInsurance, ServicesOnline} from '#components'

import DepositsIcon from '~/assets/icons/services-deposits-icon.svg?component'
import CreditsIcon from '~/assets/icons/services-credits-icon.svg?component'
import InsuranceIcon from '~/assets/icons/services-insurance-icon.svg?component'
import OnlineIcon from '~/assets/icons/services-online-icon.svg?component'

const SERVICES = [
  {key: `deposits`, title: `Вклады`, icon: DepositsIcon, component: ServicesDeposits},
  {key: `credits`, title: `Кредиты`, icon: CreditsIcon, component: ServicesCredits},
  {key: `insurance`, title: `Страхование`, icon: InsuranceIcon, component: ServicesInsurance},
  {key: `online`, title: `Онлайн-сервисы`, icon: OnlineIcon, component: ServicesOnline},
]

const [
  activeSlideIndex,
  onSlideTouchStart,
  onSlideTouchMove,
  onSlideTouchEnd,
  onControlButtonClick,
] = useSlider(SERVICES.length)

const [,
  controlsRef,
  itemsRef,
  onControlButtonFocus,
  onControlButtonKeyDown,
  onItemKeyDown,
] = useTabs(SERVICES.length, activeSlideIndex)
</script>

<style lang="scss">
.services {
  position: relative;
  margin-top: 60px;

  @include tablet-mobile {
    margin-top: 0;
    margin-bottom: 0;
    flex-flow: column-reverse;

    background-color: $alternative-color;
  }
}

.services__controls {
  @include container;

  position: relative;
  z-index: 1;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: column;
  justify-content: center;

  @include tablet-mobile {
    position: absolute;
    left: 50%;
    bottom: 11px;
    transform: translate(-50%);
    max-width: 100px;
    padding: 0;
    grid-template-columns: auto;
  }

  @include mobile {
    bottom: 7px;
  }
}

.services__controls button {
  margin: 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: left;

  cursor: pointer;
  border: none;
  border-radius: 4px 4px 0 0;
  background-color: transparent;

  &.active {
    background-color: $alternative-color;
  }

  @include tablet-mobile {
    box-sizing: content-box;
    padding: 4px;
    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: $slider-control-color;
    background-clip: content-box;

    &.active {
      background-color: $slider-control-alternative-active-color;
    }
  }

  @include mobile {
    padding: 3px;
    width: 6px;
    height: 6px;
  }
}

.services__controls svg {
  margin-right: 10px;

  @include tablet-mobile {
    display: none;
  }
}

.services__controls span {
  font-weight: 500;
  font-size: 18px;

  @include tablet-mobile {
    @include visually-hidden;
  }
}

.services__items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.services__items > li {
  @include container;

  display: none;

  &.active {
    display: block;
  }

  @include mobile {
    padding: 0;
    margin: 0;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
}

.services__items section {
  position: relative;
  box-sizing: border-box;
  padding: 53px 70px;
  min-height: 410px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  background: $alternative-color;
  border-radius: 4px;

  @include tablet {
    padding: 53px 0;
    min-height: 380px;

    background-color: transparent;
  }

  @include mobile {
    @include container;

    padding-top: 53px;
    padding-bottom: 50px;
    min-height: 362px;
  }
}

.services__items > li:first-of-type section {
  border-radius: 0 4px 4px 4px;
}

.services__items > li:last-of-type section {
  border-radius: 4px 0 4px 4px;
}

.services__image-container {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;

  @include mobile {
    position: static;
  }
}

.services__image-container img {
  position: absolute;
  left: calc(50% + 10px);
  top: 0;
  width: 440px;
  height: 290px;
  display: block;

  @include tablet {
    left: auto;
    right: 0;
    top: 8px;

    width: 289px;
    height: 260px;
  }

  @include mobile {
    left: auto;
    right: 0;
    top: 98px;

    width: 87px;
    height: 113px;
  }
}

.services__content-container {
  position: relative;
  z-index: 1;
  width: 406px;
  display: flex;
  flex-flow: column;

  @include tablet-mobile {
    width: calc(100% - 41px - 282px);
  }

  @include mobile {
    width: 100%;
    min-height: (113px + 38px + 14px);
  }
}

.services__content-container br {
  @include tablet-mobile {
    display: none;
  }
}

.services__items strong {
  margin-bottom: 30px;
  display: flex;

  font-weight: 500;
  font-size: 22px;

  @include tablet-mobile {
    margin-bottom: 25px;

    font-size: 18px;
  }

  @include mobile {
    margin-bottom: 22px;

    font-size: 16px;
  }
}

.services__items ul {
  list-style: none;
  margin: 0;
  margin-bottom: (34px - 15px);
  padding: 0;
  display: flex;
  flex-flow: column;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;

  @include tablet-mobile {
    margin-bottom: (31px - 17px);

    font-size: 16px;
  }

  @include mobile {
    position: relative;
    margin-bottom: (26px - 12px);
    width: calc(100% - 63px);

    font-size: 14px;
  }
}

.services__items ul li {
  margin-bottom: 15px;
  padding-left: 21px;

  background: url($check-icon) no-repeat left 7px / 11px 8px;

  @include tablet-mobile {
    margin-bottom: 17px;
  }

  @include mobile {
    padding-left: 15px;
    margin-bottom: 12px;

    background-position: left 6px;
    background-size: 9px 7px;
  }
}

.services__items p {
  margin: 0;
  margin-top: -5px;
  padding: 0;
  width: 340px;

  font-weight: 400;
  font-size: 18px;

  @include tablet {
    font-size: 16px;
    width: 310px;
  }

  @include mobile {
    font-size: 14px;
    line-height: 1.45;
    width: 100% - rubber--mobile(27px);
  }
}

.services__items p a {
  font: inherit;
  font-weight: 500;

  color: inherit;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;

    @include outline;
  }

  &:active {
    opacity: 0.7;
  }
}

.services section > a {
  @include button;

  position: relative;
  padding: 14px 31px;
  display: flex;

  font-weight: 500;
  font-size: 16px;
  text-decoration: none;

  @include tablet-mobile {
    padding: 13px 30px;
  }

  @include mobile {
    box-sizing: border-box;
    padding: 12px 37px;
    width: 100%;
    justify-content: center;

    font-size: 14px;
  }
}
</style>
