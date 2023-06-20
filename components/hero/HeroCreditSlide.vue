<template>
  <section class="HeroCreditSlide">
    <div class="HeroCreditSlide__container">
      <div class="HeroCreditSlide__inner">
        <h1>Лига Банк</h1>
        <p>Кредиты на любой случай</p>
        <NuxtLink :to="LocalPath.CREDIT_CALCULATOR">Рассчитать кредит</NuxtLink>
      </div>
    </div>

    <APicture src="creditCardsPng" alt="Кредитные карты «ЛИГА Банк».">
      <source
        media="MediaQuery.MOBILE"
        :srcSet="`${mobileRetinaCreditCardsPng} 2x, ${mobileCreditCardsPng} 1x`"
      />
      <source
        type="image/webp"
        :srcSet="`${retinaCreditCardsWebp} 2x, ${creditCardsWebp} 1x`"
      />
      <source
        :srcSet="`${retinaCreditCardsPng} 2x, ${creditCardsPng} 1x`"
      />
    </APicture>
  </section>
</template>

<script setup lang="ts">
import creditCardsPng from '@/assets/images/credit-cards@1x.png';
import retinaCreditCardsPng from '@/assets/images/credit-cards@2x.png';
import creditCardsWebp from '@/assets/images/credit-cards@1x.webp';
import retinaCreditCardsWebp from '@/assets/images/credit-cards@2x.webp';
import mobileCreditCardsPng from '@/assets/images/credit-cards--mobile@1x.png';
import mobileRetinaCreditCardsPng from '@/assets/images/credit-cards--mobile@2x.png';
</script>

<style lang="scss">
.HeroCreditSlide {
  position: relative;
  overflow-x: hidden;

  background-color: $primary-active-color;
  background-image: linear-gradient(180.24deg, $dark-gradient-color-1 36.31%, $dark-gradient-color-2 99.79%);

  @include mobile {
    background-image: none;
  }
}

.HeroCreditSlide__container {
  @include container;
}

.HeroCreditSlide__inner {
  position: relative;
  box-sizing: border-box;
  padding-top: 95px;
  padding-left: rubber--desktop(170px);
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 400px;

  background-image: linear-gradient(to right, transparent rubber--desktop(52px), $primary-active-color rubber--desktop(52px), $primary-active-color rubber--desktop(700px), transparent rubber--desktop(700px));

  &::before {
    content: "";
    position: absolute;
    left: rubber--desktop(52px);
    bottom: 0;
    width: rubber--desktop(150px);
    height: 269px;

    background-image: linear-gradient(183.47deg, $decoration-gradient-color-1 66.3%, $decoration-gradient-color-2 97.14%);
  }

  &::after {
    content: "";
    position: absolute;
    left: rubber--desktop(700px);
    bottom: 0;
    width: 270px;
    height: 269px;

    background-image: linear-gradient(183.47deg, $decoration-gradient-color-1 27.26%, $decoration-gradient-color-2 97.14%);
  }

  @include tablet {
    padding-top: 59px;
    padding-left: 41px;
    min-height: 300px;

    background-image: linear-gradient(to right, $primary-active-color 411px, transparent 411px);

    &::before {
      left: -$min-viewport--desktop;
      bottom: 0;
      width: $min-viewport--desktop;
      height: 100%;

      background: $primary-active-color;
    }

    &::after {
      left: 411px;
      width: 179px;
    }
  }

  @include mobile {
    padding-top: 34px;
    padding-left: 0;
    min-height: 226px;

    background: none;

    &::before,
    &::after {
      content: initial;
    }
  }
}

.HeroCreditSlide img {
  position: absolute;
  z-index: 1;
  top: 60px;
  left: calc(50% + 15px);
  width: 444px;
  height: auto;
  display: block;

  @include tablet {
    top: 42px;
    left: calc(50% - 31px);
    width: 346px;
  }

  @include mobile {
    top: 31px;
    left: calc(50% + 56px);
    width: 255px;
  }
}

.HeroCreditSlide h1 {
  margin: 0;

  font-weight: 700;
  font-size: 54px;

  color: $alternative-color;

  @include tablet {
    font-size: 46px;
  }

  @include mobile {
    font-size: 38px;
    line-height: 1.45;
  }
}

.HeroCreditSlide p {
  margin-top: 0;
  margin-bottom: 33px;
  display: flex;

  font-size: 22px;

  color: $alternative-legend-color;

  @include tablet {
    margin-bottom: 28px;

    font-size: 18px;
  }

  @include mobile {
    margin-bottom: 24px;

    font-size: 16px;
  }
}

.HeroCreditSlide a {
  padding: 14px 36px;

  font-weight: 500;
  font-size: 18px;

  color: $primary-color;
  background-color: $alternative-color;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    color: $alternative-color;
    background-color: $primary-color;
  }

  &:active {
    opacity: 0.7;
  }

  @include tablet {
    padding: 13px 31px;

    font-size: 16px;
  }

  @include mobile {
    padding: 12px 31px;

    font-size: 14px;
  }
}
</style>
