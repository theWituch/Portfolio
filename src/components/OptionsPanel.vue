<template>
  <div v-bem class="d-flex flex-wrap">
    <div v-bem:controls class="d-flex col-12 col-md-auto">
      <div v-bem:controls-button-wrapper class="col-6 col-md-auto">
        <button v-bem:controls-button @click="setAllOptions(false)">Clear all</button>
      </div>
      <div v-bem:controls-button-wrapper class="col-6 col-md-auto">
        <button v-bem:controls-button @click="setAllOptions(true)">Select all</button>
      </div>
    </div>

    <div v-bem:controls-button-wrapper v-for="(option, index) in optionsBuffer" :key="index">
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
  name: "options-panel",
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

<style lang="scss">
.options-panel {
  &__controls-button-wrapper {
    flex: auto;
    text-align: center;
    padding: 2pt;
  }
}
</style>
