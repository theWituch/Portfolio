<template>
  <button @click="toggleState" :class="{ pressed: modelValue }">{{ label }}</button>
</template>

<script>
export default {
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  data() {
    return {
      state: this.modelValue,
    };
  },
  methods: {
    toggleState() {
      this.state = !this.state;
      this.$emit("update:modelValue", this.state);
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
