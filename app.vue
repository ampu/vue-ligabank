<template>
  <Html lang="ru" class="page">
  <Head>
    <Title>Liga Bank</Title>
    <Link rel="icon" href="/favicon.svg" type="image/svg+xml"/>

    <Link rel="preload" :href="robotoRegular" as="font" type="font/woff2" crossorigin="anonymous"/>
    <Link rel="preload" :href="robotoMedium" as="font" type="font/woff2" crossorigin="anonymous"/>
    <Link rel="preload" :href="robotoBold" as="font" type="font/woff2" crossorigin="anonymous"/>
  </Head>
  <Body class="page-body">
  <NuxtPage class="page-layout"/>
  </Body>
  </Html>
</template>

<script setup lang="ts">
import favicon from '~/public/favicon.svg'
import robotoRegular from '~/assets/fonts/roboto-regular.woff2'
import robotoMedium from '~/assets/fonts/roboto-medium.woff2'
import robotoBold from '~/assets/fonts/roboto-medium.woff2'

useFragmentNavigation()
</script>
