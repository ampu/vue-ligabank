import {Ref} from 'vue'

export const useActive = (initiallyActive: boolean): [Ref<boolean>, VoidFunction, VoidFunction, VoidFunction] => {
  const isActive = ref(initiallyActive)

  const activate = () => {
    isActive.value = true
  }

  const deactivate = () => {
    isActive.value = false
  }

  const toggleActive = () => {
    isActive.value = !isActive.value
  }

  return [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ]
}
