<template>
  <section>
    <div class="services__image-container">
      <APicture :src="creditsPosterDesktop" alt="Кредиты Лига Банка.">
        <source
          :media="MediaQuery.MOBILE"
          :srcSet="`${retinaCreditsPosterMobile} 2x, ${creditsPosterMobile} 1x`"
        />
        <source
          :media="MediaQuery.TABLET"
          :srcSet="`${retinaCreditsPosterTablet} 2x, ${creditsPosterTablet} 1x`"
        />
        <source
          :srcSet="`${retinaCreditsPosterDesktop} 2x, ${creditsPosterDesktop} 1x`"
        />
      </APicture>
    </div>

    <div class="services__content-container">
      <h3 class="visually-hidden">Кредиты</h3>
      <strong>Лига Банк выдает кредиты под&nbsp;любые&nbsp;цели</strong>
      <ul>
        <li>Ипотечный кредит</li>
        <li>Автокредит</li>
        <li>Потребительский кредит</li>
      </ul>
      <p>
        Рассчитайте ежемесячный платеж
        и&nbsp;ставку по кредиту воспользовавшись
        нашим&nbsp;<Link :to="LocalPath.CREDIT_CALCULATOR">кредитным&nbsp;калькулятором</Link>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import creditsPosterMobile from '~/assets/images/services-credits-poster--mobile.jpg';
import creditsPosterTablet from '~/assets/images/services-credits-poster--tablet.jpg';
import creditsPosterDesktop from '~/assets/images/services-credits-poster--desktop.jpg';
import retinaCreditsPosterMobile from '~/assets/images/services-credits-poster--mobile@2x.jpg';
import retinaCreditsPosterTablet from '~/assets/images/services-credits-poster--tablet@2x.jpg';
import retinaCreditsPosterDesktop from '~/assets/images/services-credits-poster--desktop@2x.jpg';
</script>
