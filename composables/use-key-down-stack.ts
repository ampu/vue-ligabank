type Callback = (evt: KeyboardEvent) => void

const callbacks: Callback[] = []

const onDocumentKeyDown = (evt: KeyboardEvent) => {
  const activeCallback = callbacks[callbacks.length - 1]
  activeCallback(evt)
}

export const useKeyDownStack = (callback: Callback) => {
  onMounted(() => {
    callbacks.push(callback)
    if (callbacks.length === 1) {
      document.addEventListener(`keydown`, onDocumentKeyDown)
    }
  })
  onUnmounted(() => {
    callbacks.pop()
    if (callbacks.length === 0) {
      document.removeEventListener(`keydown`, onDocumentKeyDown)
    }
  })
}
