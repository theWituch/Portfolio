<template>
  <input type="checkbox" :id="id" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
  <label :for="id" class="w-100 px-2">{{ option }}</label>
</template>

<script>
export default {
  props: ["modelValue", "id", "option"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  cursor: pointer;
  background: var(--th-whiteblue);
}

input:checked + label {
  background: var(--bs-yellow);
}
</style>