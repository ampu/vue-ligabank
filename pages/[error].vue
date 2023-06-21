<template>
  <div class="page-layout">
    <AppHeader/>
    <main class="ErrorPage">
      <h1>Страница не найдена</h1>
      <NuxtLink class="page-link" :to="LocalPath.INDEX">
        Вернуться на главную страницу
      </NuxtLink>
    </main>
    <AppFooter/>
  </div>
</template>

<style lang="scss">
.ErrorPage {
  @include container;

  flex-grow: 1;
  padding: 60px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.ErrorPage h1 {
  margin: 0;
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 41px;

  @include mobile {
    font-size: 26px;
  }
}

.ErrorPage a {
  @include button;

  display: flex;
  justify-content: center;
  padding: 14px 35px;

  font-weight: 700;
  font-size: 16px;
  text-decoration: none;

  @include mobile {
    padding: 10px 25px;

    font-size: 14px;
  }
}
</style>
