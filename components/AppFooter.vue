<template>
  <footer class="AppFooter">
    <div class="AppFooter__container">
      <div class="AppFooter__left-column">
        <div class="AppFooter__logo-container">
          <AppLogo class="AppFooter__logo"/>

          <ul class="AppFooter__information">
            <li>150015, г. Москва, ул. Московская, д. 32</li>
            <li>Генеральная лицензия Банка России №1050</li>
            <li>Ⓒ Лига Банк, 2019</li>
          </ul>
        </div>

        <SiteNavigation
          isFooter
          listClassName="AppFooter__site-navigation-list"
          itemClassName="AppFooter__site-navigation-item"
        />
      </div>

      <div class="AppFooter__right-column">
        <a class="AppFooter__phone AppFooter__phone--short-number" href="tel:*0904">
          <strong>*0904</strong>
          <span>Бесплатно для абонентов МТС,&nbsp;Билайн,&nbsp;Мегафон,&nbsp;Теле2</span>
        </a>

        <a class="AppFooter__phone AppFooter__phone--mobile-number AppFooter__phone--last" href="tel:+78001112233">
          <strong>8 800 111 22 33</strong>
          <span>Бесплатный для всех городов&nbsp;России</span>
        </a>

        <SocialNavigation/>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.AppFooter {
  margin-top: auto;

  background-color: $alternative-color;
}

.AppFooter__container {
  @include container;

  padding-top: 58px;
  padding-bottom: 54px;
  display: grid;
  grid-template-columns: 252px 144px 196px 155px 102px;
  grid-gap: 15px;
  justify-content: space-between;
  align-items: start;

  @include tablet {
    display: grid;
    grid-template-columns: rubber--tablet(337px) 1fr;
    padding-bottom: 55px;
  }

  @include mobile {
    grid-gap: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column wrap;
    padding-top: 44px;
    padding-bottom: 44px;
  }
}

.AppFooter__left-column {
  display: contents;

  @include tablet {
    display: flex;
    flex-flow: column;
  }
}

.AppFooter__right-column {
  display: contents;

  @include tablet {
    display: flex;
    flex-flow: column;
  }
}

.AppFooter__logo-container {
  display: flex;
  flex-flow: column;

  @include tablet-mobile {
    display: contents;
  }
}

.AppFooter__logo {
  margin-top: -12px;
  margin-bottom: 14px;

  @include tablet-mobile {
    order: -1;
    margin-top: -8px;
    margin-bottom: 31px;
  }

  @include mobile {
    margin-left: -2px;
    margin-top: -12px;
    margin-bottom: 25px;
  }
}

.AppFooter__information {
  list-style: none;
  margin: 0;
  padding: 0;

  white-space: nowrap;
  font-size: 12px;
  line-height: 1.45;

  color: $primary-legend-color;

  @include mobile {
    @include visually-hidden;
  }
}

.AppFooter__site-navigation-list {
  flex-flow: column wrap;
  margin: 0;
  margin-bottom: -12px;
  margin-left: -18px;

  font-weight: 500;

  @include tablet-mobile {
    order: -1;
    margin-bottom: (32px - 18px);
  }

  @include mobile {
    font-size: 14px;
    margin-bottom: (21px - 13px);
  }
}

.AppFooter__site-navigation-item {
  margin-top: -3px;
  margin-bottom: 12px;
  margin-left: 18px;

  @include mobile {
    margin-bottom: 13px;
  }
}

.AppFooter__phone {
  display: flex;
  flex-flow: column;
  margin-bottom: auto;

  text-decoration: none;

  color: $primary-color;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.7;
  }

  &--short-number {
    width: 196px;
    padding-left: (10px + 19px);

    background: transparent url("@/assets/icons/short-phone-icon.svg") no-repeat left 2px / 10px 16px;
  }

  &--mobile-number {
    width: 155px;
    padding-left: (16px + 17px);

    background: transparent url("@/assets/icons/mobile-phone-icon.svg") no-repeat left 3px / 16px 16px;
  }

  @include tablet-mobile {
    margin-bottom: 21px;

    &--last {
      margin-bottom: 28px;
    }
  }

  @include mobile {
    margin-bottom: 14px;

    &--last {
      margin-bottom: 21px;
    }
  }
}

.AppFooter__phone strong {
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.45;
  white-space: nowrap;
}

.AppFooter__phone span {
  margin: 0;
  padding: 0;

  font-size: 12px;
  line-height: 1.45;

  color: $primary-legend-color;
}
</style>

