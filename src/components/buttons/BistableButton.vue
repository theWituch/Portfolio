<template>
  <button @click="toggleState" :class="{ pressed: modelValue }">{{ label }}</button>
</template>

<script>
export default {
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  methods: {
    toggleState() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style>
button.pressed {
  color: white;
  background: green;
}
</style>
