<template>
  <picture>
    <slot/>
    <img ref="imageRef" :alt="alt"/>
  </picture>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string,
  alt: string,
}>()

const imageRef = ref()

watchEffect(() => {
  if (!imageRef.value) {
    return
  }
  imageRef.value.src = props.src
})
</script>
