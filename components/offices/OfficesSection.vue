<template>
  <section class="OfficesSection" :data-navigation-id="LocalPath.CONTACTS">
    <header class="OfficesSection__header">
      <h2>Отделения Лига Банка</h2>
    </header>
    <div class="OfficesSection__map">
      <div class="OfficesSection__image-container">
        <APicture :src="officesMapDesktop" alt="Карта отделений Лига Банка.">
          <source :media="MediaQuery.MOBILE" :srcSet="`${retinaOfficesMapMobile} 2x, ${officesMapMobile} 1x`"/>
          <source :media="MediaQuery.TABLET" :srcSet="`${retinaOfficesMapTablet} 2x, ${officesMapTablet} 1x`"/>
          <source :srcSet="`${retinaOfficesMapDesktop} 2x, ${officesMapDesktop} 1x`"/>
        </APicture>
      </div>
      <div class="OfficesSection__map-container">
        <OfficesMap/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {applyReactInVue} from 'veaury'

import {OfficesMap as ReactOfficesMap} from './OfficesMap'

import officesMapDesktop from '~/assets/images/offices-map--desktop.jpg'
import officesMapTablet from '~/assets/images/offices-map--tablet.jpg'
import officesMapMobile from '~/assets/images/offices-map--mobile.jpg'
import retinaOfficesMapDesktop from '~/assets/images/offices-map--desktop@2x.jpg'
import retinaOfficesMapTablet from '~/assets/images/offices-map--tablet@2x.jpg'
import retinaOfficesMapMobile from '~/assets/images/offices-map--mobile@2x.jpg'

const OfficesMap = applyReactInVue(ReactOfficesMap)
</script>

<style lang="scss">
.OfficesSection {
  margin-top: 93px;
  margin-bottom: 110px;

  @include tablet {
    margin-top: 67px;
    margin-bottom: 80px;
  }

  @include mobile {
    margin-top: 53px;
    margin-bottom: 60px;
  }
}

.OfficesSection__header {
  @include container;
}

.OfficesSection h2 {
  margin: 0;
  padding: 0;
  margin-bottom: 57px;

  font-weight: bold;
  font-size: 41px;

  @include tablet {
    margin-bottom: 35px;

    font-size: 32px;
  }

  @include mobile {
    margin-bottom: 28px;

    font-size: 22px;
  }
}

.OfficesSection__map {
  @include container;

  display: grid;
  align-items: start;

  @include mobile {
    padding: 0;
    width: 100%;
  }
}

.OfficesSection__image-container {
  grid-area: 1 / 1;
}

.OfficesSection__map img {
  margin: 0 auto;
  max-width: 100%;
  display: block;
}

.OfficesSection__map-container {
  grid-area: 1 / 1;
  height: 462px;

  @include tablet {
    height: 462px;
  }

  @include mobile {
    height: 381px;
  }
}
</style>
