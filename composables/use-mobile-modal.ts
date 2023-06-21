import {useActive} from '~/composables/use-active'

const calculateActive = () => window.innerWidth < Viewport.TABLET

export const useMobileModal = () => {
  const [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ] = useActive(false)

  const onWindowResize = () => {
    isActive.value = calculateActive()
  }

  onMounted(() => {
    isActive.value = calculateActive()
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
