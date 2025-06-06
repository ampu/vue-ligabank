import {useActive} from '~/composables/use-active'

export const useMobileModal = (): [Ref<boolean>, VoidFunction, VoidFunction, VoidFunction] => {
  const [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ] = useActive(false)

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
