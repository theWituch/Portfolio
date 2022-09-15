<template>
  <button v-bem="{ ['is-pressed']: modelValue}" @click="toggleState">{{ label }}</button>
</template>

<script>
export default {
  name: "bistable-button",
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  methods: {
    toggleState() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style lang="scss">
.bistable-button {
  color: black;
  &--is-pressed {
    color: white;
    background: green;
  }
}
</style>
