import {useActive} from '~/composables/use-active'

export const useMobileModal = () => {
  const [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ] = useActive(false)

  const onWindowResize = () => {
    if (window.innerWidth >= Viewport.TABLET) {
      deactivate()
    }
  }

  onMounted(() => {
    window.addEventListener(`resize`, onWindowResize)
  })

  onUnmounted(() => {
    window.removeEventListener(`resize`, onWindowResize)
  })

  watchEffect((onCleanup) => {
    if (!isActive.value) {
      return
    }
    document.body.classList.add(`page-body--mobile-modal`)
    onCleanup(() => {
      document.body.classList.remove(`page-body--mobile-modal`)
    })
  })

  return [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ]
}
