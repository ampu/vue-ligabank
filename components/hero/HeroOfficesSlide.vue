<template>
  <section class="HeroOfficesSlide">
    <div class="HeroOfficesSlide__container">
      <div class="HeroOfficesSlide__inner">
        <h1>Лига Банк</h1>
        <p>Всегда рядом</p>
        <NuxtLink :to="LocalPath.CONTACTS">Найти отделение</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.HeroOfficesSlide {
  background: $offices-slide-background-color url("@/assets/images/hero-slide-3--desktop.jpg") no-repeat center center / auto 400px;

  @include tablet {
    background: url("@/assets/images/hero-slide-3--tablet.jpg") no-repeat center center / auto 300px, linear-gradient(to right, $offices-slide-background-color 0%, $offices-slide-background-color 50%, $offices-slide-background-color-right 50%, $offices-slide-background-color-right 100%);
    background-color: $offices-slide-background-color;
  }

  @include mobile {
    background: url("@/assets/images/hero-slide-3--tablet.jpg") no-repeat calc(50% - 57px) calc(50% + 1px) / auto 226px, linear-gradient(to right, $offices-slide-background-color 0%, $offices-slide-background-color 50%, $offices-slide-background-color-right 50%, $offices-slide-background-color-right 100%);
    background-color: $offices-slide-background-color;
  }
}

.HeroOfficesSlide__container {
  @include container;
}

.HeroOfficesSlide__inner {
  position: relative;
  box-sizing: border-box;
  padding-top: 95px;
  padding-left: rubber--desktop(170px);
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 400px;

  @include tablet {
    padding-top: 59px;
    padding-left: 41px;
    min-height: 300px;
  }

  @include mobile {
    padding-top: 34px;
    padding-left: 0;
    min-height: 226px;
  }
}

.HeroOfficesSlide h1 {
  margin: 0;

  font-weight: 700;
  font-size: 54px;

  color: $primary-color;

  @include tablet {
    font-size: 46px;
  }

  @include mobile {
    font-size: 38px;
    line-height: 1.45;
  }
}

.HeroOfficesSlide p {
  margin-top: 0;
  margin-bottom: 33px;
  display: flex;

  font-size: 22px;

  color: $slide-alternative-slogan-color;

  @include tablet {
    margin-bottom: 28px;

    font-size: 18px;
  }

  @include mobile {
    margin-bottom: 24px;
    max-width: 140px;

    font-size: 16px;
  }
}

.HeroOfficesSlide a {
  padding: 14px 48px;

  font-weight: 500;
  font-size: 18px;

  color: $alternative-color;
  background-color: $primary-active-color;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: $primary-color;
  }

  &:active {
    opacity: 0.7;
  }

  @include tablet {
    padding: 13px 38px;

    font-size: 16px;
  }

  @include mobile {
    padding: 12px 38px;

    font-size: 14px;
  }
}
</style>
