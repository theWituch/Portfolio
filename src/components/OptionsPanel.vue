<template>
  <div class="d-flex flex-wrap">
    <div class="controls d-flex col-12 col-md-auto">
      <div class="b-wrapper col-6 col-md-auto">
        <button @click="setAllOptions(false)">Clear all</button>
      </div>
      <div class="b-wrapper col-6 col-md-auto">
        <button @click="setAllOptions(true)">Select all</button>
      </div>
    </div>

    <div v-for="(option, index) in optionsBuffer" :key="index" class="b-wrapper">
      <slot :option="option">
        <BistableButton v-model="option.state" :label="option.name" @dblclick="setOnlyOneOption(option, true)" />
      </slot>
    </div>
  </div>
</template>

<script>
import BistableButton from "./buttons/BistableButton.vue";

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

    const setAllOptions = (newState) => {
      optionsBuffer.value = optionsBuffer.value.map((bufferedOption) => {
        return { ...bufferedOption, state: newState };
      });
    };

    const setOnlyOneOption = (option, newState) => {
      optionsBuffer.value = optionsBuffer.value.map((bufferedOption) => {
        let resultState = bufferedOption.name === option.name ? newState : !newState;
        return { ...bufferedOption, state: resultState };
      });
    };

    return { optionsBuffer, activeOptions, setAllOptions, setOnlyOneOption };
  },
};
</script>

<style>
.b-wrapper {
  flex: auto;
  text-align: center;
  padding: 2pt;
}
</style>