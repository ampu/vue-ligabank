<template>
  <div
    ref="containerRef"
    class="SignIn"
    @mousedown="onContainerMouseDown"
  >
    <FocusTrap>
      <form
        :class="[isBounce && `bounce`, isError && `shake`]"
        @submit.prevent
      >
        <AppLogo isExtended class="SignIn__logo"/>

        <div class="SignIn__field SignIn__field--login">
          <label for="SignIn-login">Логин</label>
          <input
            v-focus
            id="SignIn-login"
            type="text"
            name="login"
            autoComplete="username"
            required
            v-model="signInData.login"
          />
        </div>

        <div class="SignIn__field SignIn__field--password">
          <label for="SignIn-password">Пароль</label>
          <input
            id="SignIn-password"
            class="SignIn__password-input"
            :type="isPasswordVisibleByMouse || isPasswordVisibleByKeyboard ? `text` : `password`"
            name="password"
            autoComplete="current-password"
            required
            v-model="signInData.password"
          />

          <button
            type="button"
            class="SignIn__password-toggle-button"
            @mousedown="onPasswordToggleButtonMouseDown"
            @keydown="onPasswordToggleKeyDown"
          >
            <SignInPasswordToggleButtonIcon/>
            <span>Показать пароль</span>
          </button>
        </div>

        <button type="submit" @click="onSubmitButtonClick">Войти</button>

        <NuxtLink
          class="SignIn__forgotten-password"
          :to="LocalPath.FORGOTTEN_PASSWORD"
          @click="onClose"
        >
          Забыли пароль?
        </NuxtLink>

        <button class="SignIn__close-button" type="button" @click="onClose">
          <PopupCloseButtonIcon/>
          <span>Закрыть</span>
        </button>
      </form>
    </FocusTrap>
  </div>
</template>

<script setup lang="ts">
import {FocusTrap} from 'focus-trap-vue'

import PopupCloseButtonIcon from '@/assets/icons/popup-close-icon.svg?component'
import SignInPasswordToggleButtonIcon from '@/assets/icons/sign-in-password-toggle-icon.svg?component'

import {signInStorage} from '~/storages/sign-in-storage'

const emit = defineEmits<{
  (type: `close`): void,
}>()

const onClose = () => {
  emit(`close`)
}

const [isBounce] = useBounce()
const [isError, setError, unsetError] = useActive(false)
const [isPasswordVisibleByMouse, setPasswordVisibleByMouse, unsetPasswordVisibleByMouse] = useActive(false)
const [isPasswordVisibleByKeyboard, setPasswordVisibleByKeyboard, unsetPasswordVisibleByKeyboard] = useActive(false)

const signInData = ref(signInStorage.getMap())

const containerRef = ref()
const [formRef, onContainerMouseDown] = usePopup(onClose)

watchEffect(() => {
  if (!containerRef.value) {
    return
  }
  formRef.value = containerRef.value.querySelector(`form`)
})

const onSubmitButtonClick = (evt) => {
  evt.preventDefault()
  unsetError()

  nextTick(() => {
    if (!(formRef.value as HTMLFormElement).reportValidity()) {
      setError()
      return
    }
    const formData = new FormData(formRef.value)

    const newSignInData = {
      login: formData.get(`login`),
      password: formData.get(`password`),
    }

    signInStorage.patchMap(newSignInData)
    onClose()
  })
}

const onPasswordToggleButtonMouseDown = (evt) => {
  if (evt.button === MouseButton.PRIMARY) {
    setPasswordVisibleByMouse()
  }
}

const onDocumentMouseUp = () => {
  unsetPasswordVisibleByMouse()
}

watchEffect((onCleanup) => {
  if (!isPasswordVisibleByMouse.value) {
    return
  }
  document.addEventListener(`mouseup`, onDocumentMouseUp)
  onCleanup(() => {
    document.removeEventListener(`mouseup`, onDocumentMouseUp)
  })
})

const onPasswordToggleKeyDown = (evt) => {
  if (evt.key === KeyboardKey.SPACE) {
    setPasswordVisibleByKeyboard()
  }
}

const onDocumentKeyUp = () => {
  unsetPasswordVisibleByKeyboard()
}

watchEffect((onCleanup) => {
  if (!isPasswordVisibleByKeyboard.value) {
    return
  }
  document.addEventListener(`keyup`, onDocumentKeyUp)
  onCleanup(() => {
    document.removeEventListener(`keyup`, onDocumentKeyUp)
  })
})
</script>

<style lang="scss">
.SignIn {
  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  background-color: $overlay-color;
}

.SignIn form {
  position: relative;
  box-sizing: border-box;
  width: 544px;
  padding: 56px;
  display: flex;
  flex-flow: column;

  background-color: $alternative-color;
  border: 4px solid $primary-active-color;

  @include tablet-mobile {
    padding: 56px 84px;
    width: 678px;
  }

  @include mobile {
    padding: 46px 16px 42px;
    width: 290px;
  }
}

.SignIn__logo {
  margin-bottom: 35px;
  margin-right: auto;

  @include mobile {
    margin-bottom: 25px;
    margin-left: -5px;
  }
}

.SignIn__field {
  position: relative;
  margin-bottom: 24px;
  display: flex;
  flex-flow: column;

  font-weight: 400;
  font-size: 16px;

  color: $label-color;

  &--password {
    margin-bottom: 6px;
  }

  @include mobile {
    margin-bottom: 19px;

    &--password {
      margin-bottom: 30px;
    }
  }
}

.SignIn label {
  margin-bottom: 5px;
  display: flex;
}

.SignIn input {
  margin: 0;
  padding: 16px 19px 17px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;

  border: 1px solid $primary-color;
  border-radius: 4px;
  color: inherit;
}

.SignIn__password-input {
  padding-right: (22px + 19px);

  @include mobile {
    padding-right: (22px + 15px);
  }

  &::-webkit-credentials-auto-fill-button {
    margin-right: 35px;

    @include mobile {
      margin-right: 25px;
    }
  }
}

.SignIn__password-toggle-button {
  position: absolute;
  right: 19px;
  bottom: 19px;
  padding: 5px;
  display: flex;

  cursor: pointer;
  border: none;
  background-color: transparent;

  @include mobile {
    right: 10px;
  }
}

.SignIn__password-toggle-button svg {
  width: 22px;
  height: 12px;
}

.SignIn__password-toggle-button span {
  @include visually-hidden;
}

.SignIn__password-toggle-button:hover path {
  stroke: $black-color;
}

.SignIn__password-toggle-button:active {
  opacity: 0.5;
}

.SignIn__forgotten-password {
  margin-left: auto;
  margin-bottom: 27px;
  display: flex;

  font-weight: 400;
  font-size: 12px;
  text-decoration: none;

  color: $primary-legend-color;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.7;
  }

  @include mobile {
    order: 1;
    margin-bottom: 0;
    margin-right: auto;

    font-size: 14px;
  }
}

.SignIn button[type="submit"] {
  @include button;

  order: 1;
  padding: 20px;

  font-weight: 500;
  font-size: 18px;

  @include mobile {
    font-size: 14px;

    padding: 18px 18px 17px;
    margin-bottom: 10px;
  }
}

.SignIn__close-button {
  position: absolute;
  right: 51px;
  top: 51px;
  display: flex;
  box-sizing: content-box;
  padding: 5px;
  width: 16px;
  height: 16px;

  cursor: pointer;
  border: none;
  background-color: transparent;

  @include tablet-mobile {
    right: 79px;
  }

  @include mobile {
    right: 9px;
    top: 39px;
  }
}

.SignIn__close-button svg {
  width: 16px;
  height: 16px;
}

.SignIn__close-button:hover path {
  stroke: $black-color;
  stroke-width: 3px;
}

.SignIn__close-button:active {
  opacity: 0.5;
}

.SignIn__close-button span {
  @include visually-hidden;
}
</style>

