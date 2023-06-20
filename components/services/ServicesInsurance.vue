<template>
  <section>
    <div class="services__image-container">
      <APicture :src="insurancePosterDesktop" alt="Лига Страхование.">
        <source
          :media="MediaQuery.MOBILE"
          :srcSet="`${retinaInsurancePosterMobile} 2x, ${insurancePosterMobile} 1x`"
        />
        <source
          :media="MediaQuery.TABLET"
          :srcSet="`${retinaInsurancePosterTablet} 2x, ${insurancePosterTablet} 1x`"
        />
        <source
          :srcSet="`${retinaInsurancePosterDesktop} 2x, ${insurancePosterDesktop} 1x`"
        />
      </APicture>
    </div>

    <div class="services__content-container">
      <h3 class="visually-hidden">Страхование</h3>
      <strong>Лига Страхование — застрахуем все&nbsp;что&nbsp;захотите</strong>
      <ul>
        <li>Автомобильное страхование</li>
        <li>Страхование жизни и здоровья</li>
        <li>Страхование недвижимости</li>
      </ul>
    </div>

    <NuxtLink :to="LocalPath.INSURANCE">Узнать подробнее</NuxtLink>
  </section>
</template>

<script setup lang="ts">
import insurancePosterMobile from '~/assets/images/services-insurance-poster--mobile.jpg';
import insurancePosterTablet from '~/assets/images/services-insurance-poster--tablet.jpg';
import insurancePosterDesktop from '~/assets/images/services-insurance-poster--desktop.jpg';
import retinaInsurancePosterMobile from '~/assets/images/services-insurance-poster--mobile@2x.jpg';
import retinaInsurancePosterTablet from '~/assets/images/services-insurance-poster--tablet@2x.jpg';
import retinaInsurancePosterDesktop from '~/assets/images/services-insurance-poster--desktop@2x.jpg';
</script>
