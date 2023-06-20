export const useFragmentNavigation = () => {
  const route = useRoute()

  watchEffect(() => {
    scrollIntoViewByNavigationId(route.fullPath)
  })

  const onDocumentClick = (evt: MouseEvent) => {
    for (let target = evt.target as Element;
         target;
         target = target.parentNode as Element
    ) {
      if (target.tagName === `A`) {
        const match = (target as HTMLAnchorElement).href.match(/#(.+)$/)
        if (match) {
          const id = match[1]
          scrollIntoViewByNavigationId(id)
        }
        return
      }
    }
  }

  onMounted(() => {
    document.addEventListener(`click`, onDocumentClick)
  })

  onUnmounted(() => {
    document.removeEventListener(`click`, onDocumentClick)
  })
}
