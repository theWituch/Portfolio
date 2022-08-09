<template>
  <span>{{ actualText }}</span>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import useUtils from "@/composables/useUtils";

export default {
  props: ["strings"],
  setup(props) {
    const { randomizeInteger } = useUtils();

    const actualText = ref("");

    let stringNumber;
    const drawString = () => {
      stringNumber = randomizeInteger(0, props.strings.length - 1, stringNumber);
      actualText.value = props.strings[stringNumber];
    };

    const intervalId = window.setInterval(drawString, 2000);
    onUnmounted(() => {
      window.clearInterval(intervalId);
    });
    onMounted(() => {
      actualText.value = props.strings[0];
    });

    return { actualText };
  },
};
</script>

<style>
</style>
