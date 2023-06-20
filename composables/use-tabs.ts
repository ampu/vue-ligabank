import {Ref} from 'vue'
import _ from 'lodash'

const INTERACTIVE_ELEMENTS = [`a`, `button`, `input`, `select`, `textarea`, `[tabindex]`]

const queryFirstInteractiveElement = (container: Element) => {
  return container.querySelector(INTERACTIVE_ELEMENTS.join(`, `)) as HTMLElement
}

const queryLastInteractiveElement = (container: Element) => {
  return _.last(container.querySelectorAll(INTERACTIVE_ELEMENTS.join(`, `))) as HTMLElement
}

const focusElement = (element: HTMLElement) => {
  if (element) {
    element.focus()
  }
  return element
}

const focusControlButton = (controls: Element, childIndex: number) => {
  controls.children[childIndex].querySelector(`button`)!.focus()
}

export const useTabs = (
  slidesCount: number,
  activeSlideIndex: Ref<number>,
) => {
  const controlsRef = ref<Element>()
  const itemsRef = ref<Element>()

  const onControlButtonFocus = (evt: FocusEvent) => {
    (evt.currentTarget as HTMLElement).click()
  }

  const onControlButtonKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.TAB) {
      if (evt.shiftKey) {
        return
      }
      const element = queryFirstInteractiveElement(itemsRef.value!.children[activeSlideIndex.value])
      if (focusElement(element)) {
        evt.preventDefault()
      }
    }
  }

  const onItemKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.TAB) {
      if (evt.shiftKey) {
        if (activeSlideIndex.value === 0) {
          return
        }
        const firstInteractiveElement = queryLastInteractiveElement(itemsRef.value!.children[activeSlideIndex.value])
        if (!firstInteractiveElement || !firstInteractiveElement.contains(evt.target as Element)) {
          return
        }
        evt.preventDefault()
        focusControlButton(controlsRef.value!, activeSlideIndex.value)
        return
      }

      if (activeSlideIndex.value === slidesCount - 1) {
        return
      }
      const lastInteractiveElement = queryLastInteractiveElement(itemsRef.value!.children[activeSlideIndex.value])
      if (!lastInteractiveElement || !lastInteractiveElement.contains(evt.target as Element)) {
        return
      }
      evt.preventDefault()
      focusControlButton(controlsRef.value!, activeSlideIndex.value + 1)
    }
  }

  return [
    activeSlideIndex,
    controlsRef,
    itemsRef,
    onControlButtonFocus,
    onControlButtonKeyDown,
    onItemKeyDown,
  ]
}
