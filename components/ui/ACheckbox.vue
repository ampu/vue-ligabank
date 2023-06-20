<template>
  <label class="ACheckbox">
    <input
      type="checkbox"
      :name="name"
      v-model="value"
    />
    <span>{{ title }}</span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string,
  title: string,
  modelValue: boolean,
}>()

const emit = defineEmits<{
  (type: `update:modelValue`, value: boolean): void,
}>()

const value = useProp(props, emit, `modelValue`)
</script>

<style lang="scss">
.ACheckbox {
  margin-bottom: 10px;
  display: flex;
  flex-flow: wrap;
  align-items: center;

  cursor: pointer;
  color: $label-color;

  @include mobile {
    font-size: 14px;
  }
}

.ACheckbox:last-of-type {
  margin-bottom: 30px;
}

.ACheckbox span {
  padding: 0 3px;
  margin: 0 -3px;
  display: flex;
  align-items: center;

  border-radius: 4px;

  &::before {
    content: "";
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    display: flex;

    border-radius: 2px;
    border: 1px solid $primary-color;
  }
}

.ACheckbox input {
  @include visually-hidden;
}

.ACheckbox input:checked + span {
  &::before {
    border-color: $primary-active-color;
    background: $primary-active-color url("@/assets/icons/checkbox-icon.svg") no-repeat center center / 8px 6px;
  }
}

.ACheckbox input:focus + span {
  @include outline;
}
</style>
