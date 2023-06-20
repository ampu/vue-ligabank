<template>
  <div class="HeroArea">
    <ul class="HeroArea__controls">
      <li
        v-for="(slide, slideIndex) of HERO_AREA_SLIDES"
        :key="slide.key"
      >
        <button
          type="button"
          :class="{
            active: slideIndex === activeSlideIndex,
            alternative: slide.isAlternativeButton,
          }"
          :data-index="slideIndex"
          @click="onControlButtonClick"
        >
          <span class="visually-hidden">Слайд №$"slideIndex + 1"</span>
        </button>
      </li>
    </ul>

    <ul class="HeroArea__slides">
      <template v-for="(slide, slideIndex) of HERO_AREA_SLIDES">
        <li
          v-if="slideIndex === activeSlideIndex"
          :key="slide.key"
          @touchstart="onSlideTouchStart"
          @touchmove="onSlideTouchMove"
          @touchend="onSlideTouchEnd"
        >
          <component :is="slide.component"/>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useSlider} from '~/composables/use-slider'

import {HeroConfidenceSlide, HeroCreditSlide, HeroOfficesSlide} from '#components'

const SWITCH_SLIDE_INTERVAL = 4000;

const HERO_AREA_SLIDES = [
  {key: `credit`, component: HeroCreditSlide, isAlternativeButton: false},
  {key: `confidence`, component: HeroConfidenceSlide, isAlternativeButton: false},
  {key: `offices`, component: HeroOfficesSlide, isAlternativeButton: true},
];

const [
  activeSlideIndex,
  onSlideTouchStart,
  onSlideTouchMove,
  onSlideTouchEnd,
  onControlButtonClick,
] = useSlider(HERO_AREA_SLIDES.length, SWITCH_SLIDE_INTERVAL)
</script>

<style lang="scss">
.HeroArea {
  position: relative;
}

.HeroArea__controls {
  position: absolute;
  z-index: 1;
  top: 347px;
  left: 50%;
  transform: translateX(-50%);

  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  @include tablet {
    top: 274px;
  }

  @include mobile {
    top: 208px;
  }
}

.HeroArea__controls button {
  margin: 0;
  padding: 4px;
  box-sizing: content-box;
  width: 8px;
  height: 8px;
  display: flex;

  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: $slider-control-color;
  background-clip: content-box;

  &.active {
    background-color: $slider-control-active-color;

    &.alternative {
      background-color: $slider-control-alternative-active-color;
    }
  }

  @include mobile {
    width: 6px;
    height: 6px;
    padding: 3px;
  }
}

.HeroArea__slides {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: wrap;
}

.HeroArea__slides li {
  width: 100%;
}
</style>
