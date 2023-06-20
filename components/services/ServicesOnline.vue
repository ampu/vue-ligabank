<template>
  <section>
    <div class="services__image-container">
      <APicture :src="onlineServicesPosterDesktop" alt="Онлайн-сервисы Лига Банка.">
        <source
          :media="MediaQuery.MOBILE"
          :srcSet="`${retinaOnlineServicesPosterMobile} 2x, ${onlineServicesPosterMobile} 1x`"
        />
        <source
          :media="MediaQuery.TABLET"
          :srcSet="`${retinaOnlineServicesPosterTablet} 2x, ${onlineServicesPosterTablet} 1x`"
        />
        <source
          :srcSet="`${retinaOnlineServicesPosterDesktop} 2x, ${onlineServicesPosterDesktop} 1x`"
        />
      </APicture>
    </div>

    <div class="services__content-container">
      <h3 class="visually-hidden">Онлайн-сервисы</h3>
      <strong>Лига Банк — это огромное количество онлайн‑сервисов для&nbsp;вашего&nbsp;удобства</strong>
      <ul>
        <li>Мобильный банк, <br/>который&nbsp;всегда&nbsp;под&nbsp;рукой</li>
        <li>Приложение Лига-проездной позволит вам&nbsp;оплачивать билеты по&nbsp;всему&nbsp;миру</li>
      </ul>
    </div>

    <NuxtLink :to="LocalPath.ONLINE_SERVICES">Узнать подробнее</NuxtLink>
  </section>
</template>

<script setup lang="ts">
import onlineServicesPosterMobile from '~/assets//images/services-online-poster--mobile.jpg';
import onlineServicesPosterTablet from '~/assets//images/services-online-poster--tablet.jpg';
import onlineServicesPosterDesktop from '~/assets//images/services-online-poster--desktop.jpg';
import retinaOnlineServicesPosterMobile from '~/assets//images/services-online-poster--mobile@2x.jpg';
import retinaOnlineServicesPosterTablet from '~/assets//images/services-online-poster--tablet@2x.jpg';
import retinaOnlineServicesPosterDesktop from '~/assets//images/services-online-poster--desktop@2x.jpg';
</script>
