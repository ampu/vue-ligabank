<template>
  <section class="HeroConfidenceSlide">
    <div class="HeroConfidenceSlide__container">
      <div class="HeroConfidenceSlide__inner">
        <h1>Лига Банк</h1>
        <p>Ваша уверенность в завтрашнем дне</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.HeroConfidenceSlide {
  background: url("@/assets/images/hero-slide-2--desktop.jpg") no-repeat center center / auto 400px, linear-gradient(to right, $confidence-slide-background-color-left 0%, $confidence-slide-background-color-left 50%, $confidence-slide-background-color-right 50%, $confidence-slide-background-color-right 100%);
  background-color: $confidence-slide-background-color-right;

  @include tablet {
    background: url("@/assets/images/hero-slide-2--tablet.jpg") no-repeat center center / auto 300px, linear-gradient(to right, $confidence-slide-background-color-left 0%, $confidence-slide-background-color-left 50%, $confidence-slide-background-color-right 50%, $confidence-slide-background-color-right 100%);
    background-color: $confidence-slide-background-color-right;
  }

  @include mobile {
    background: url("@/assets/images/hero-slide-2--tablet.jpg") no-repeat calc(50% - 47px) calc(50% + 1px) / auto 226px, linear-gradient(to right, $confidence-slide-background-color-left 0%, $confidence-slide-background-color-left 50%, $confidence-slide-background-color-right 50%, $confidence-slide-background-color-right 100%);
    background-color: $confidence-slide-background-color-right;
  }
}

.HeroConfidenceSlide__container {
  @include container;
}

.HeroConfidenceSlide__inner {
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

.HeroConfidenceSlide h1 {
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

.HeroConfidenceSlide p {
  margin-top: 0;
  margin-bottom: 33px;
  display: flex;

  font-size: 22px;
  line-height: 1.2;

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
</style>
