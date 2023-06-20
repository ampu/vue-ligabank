<template>
  <div class="CreditThankYou" @mousedown="onContainerMouseDown">
    <FocusTrap>
      <div ref="popupRef" class="CreditThankYou__popup">
        <strong>Спасибо за обращение в&nbsp;наш банк.</strong>
        <p>Наш менеджер скоро свяжется с вами <br/>
          по указанному номеру телефона.</p>

        <button class="CreditThankYou__close-button" type="button" @click="onClose">
          <PopupCloseIcon/>
          <span>Закрыть</span>
        </button>
      </div>
    </FocusTrap>
  </div>
</template>

<script setup lang="ts">
import {FocusTrap} from 'focus-trap-vue'

import {usePopup} from '~/composables/use-popup'

import PopupCloseIcon from '~/assets/icons/popup-close-icon.svg?component'

const emit = defineEmits<{
  (type: `close`): void,
}>()

const onClose = () => {
  emit(`close`)
}

const [
  popupRef,
  onContainerMouseDown,
] = usePopup(onClose)
</script>

<style lang="scss">
.CreditThankYou {
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

.CreditThankYou__popup {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-sizing: border-box;
  padding: 52px 58px 55px;
  width: 500px;

  text-align: center;

  border-radius: 4px;
  background-color: $alternative-color;

  @include tablet-mobile {
    width: 678px;
  }

  @include mobile {
    padding: 34px 26px 36px;
    width: 290px;
  }
}

.CreditThankYou strong {
  display: flex;

  font-weight: 500;
  font-size: 22px;

  margin-bottom: 12px;

  @include mobile {
    font-size: 18px;
  }
}

.CreditThankYou p {
  margin: 0;
  padding: 0;

  color: $label-color;
}

.CreditThankYou p br {
  @include mobile {
    display: none;
  }
}

.CreditThankYou__close-button {
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  box-sizing: content-box;
  padding: 5px;
  width: 16px;
  height: 16px;

  cursor: pointer;
  border: none;
  background-color: transparent;

  @include tablet-mobile {
    top: 25px;
    right: 25px;
  }

  @include mobile {
    right: 10px;
    top: 10px;
    width: 12px;
    height: 12px;
  }
}

.CreditThankYou__close-button svg {
  width: 16px;
  height: 16px;

  @include mobile {
    width: 12px;
    height: 12px;
  }
}

.CreditThankYou__close-button span {
  @include visually-hidden;
}
</style>
