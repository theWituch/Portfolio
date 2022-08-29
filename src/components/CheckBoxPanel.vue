<template>
  <div class="cbp-wrapper">
    <div v-for="(option, index) in optionsBuffer" :key="index" class="checkbox">
      <slot :option="option">
        <BistableButton :id="id + '-checkbox-' + index" :option="option.name" v-model="option.state" />
      </slot>
    </div>
  </div>
</template>

<script>
import BistableButton from "./toggles/BistableButton.vue";

import { ref } from "@vue/reactivity";
import { computed, watchEffect } from "@vue/runtime-core";

export default {
  components: { BistableButton },
  props: ["modelValue", "id", "options"],
  emits: ["update:modelValue"],
  setup(props, context) {
    const optionsBuffer = ref([]);
    optionsBuffer.value = props.options.map((option) => {
      return {
        name: option,
        state: true,
      };
    });

    const activeOptions = computed(() => {
      return optionsBuffer.value.filter((option) => option.state).map((option) => option.name);
    });
    watchEffect(() => {
      context.emit("update:modelValue", activeOptions.value);
    });

    return { optionsBuffer, activeOptions };
  },
};
</script>

<style>
.cbp-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5pt;
}

.checkbox {
  flex: auto;
  text-align: center;
}
</style>