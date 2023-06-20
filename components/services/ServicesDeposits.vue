<template>
  <section>
    <div class="services__image-container">
      <APicture :src="depositsPosterDesktop" alt="Вклады Лига Банка.">
        <source
          :media="MediaQuery.MOBILE"
          :srcSet="`${retinaDepositsPosterMobile} 2x, ${depositsPosterMobile} 1x`"
        />
        <source
          :media="MediaQuery.TABLET"
          :srcSet="`${retinaDepositsPosterTablet} 2x, ${depositsPosterTablet} 1x`"
        />
        <source
          :srcSet="`${retinaDepositsPosterDesktop} 2x, ${depositsPosterDesktop} 1x`"
        />
      </APicture>
    </div>

    <div class="services__content-container">
      <h3 class="visually-hidden">Вклады</h3>
      <strong>Вклады Лига Банка – это выгодная <br/>
        инвестиция в свое будущее</strong>
      <ul>
        <li>Проценты по вкладам до 7%</li>
        <li>Разнообразные условия</li>
        <li>Возможность ежемесячной капитализации или вывод процентов на&nbsp;банковскую&nbsp;карту</li>
      </ul>
    </div>

    <NuxtLink :to="LocalPath.DEPOSITS">Узнать подробнее</NuxtLink>
  </section>
</template>

<script setup lang="ts">
import depositsPosterMobile from '~/assets/images/services-deposits-poster--mobile.jpg';
import depositsPosterTablet from '~/assets/images/services-deposits-poster--tablet.jpg';
import depositsPosterDesktop from '~/assets/images/services-deposits-poster--desktop.jpg';
import retinaDepositsPosterMobile from '~/assets/images/services-deposits-poster--mobile@2x.jpg';
import retinaDepositsPosterTablet from '~/assets/images/services-deposits-poster--tablet@2x.jpg';
import retinaDepositsPosterDesktop from '~/assets/images/services-deposits-poster--desktop@2x.jpg';
</script>
