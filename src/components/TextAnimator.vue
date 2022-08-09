<template>
  <span>{{ output }}</span>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted, onUnmounted } from "@vue/runtime-core";

import { sleep, randomizeInteger } from "@/helpers/utils";

export default {
  props: {
    strings: {
      type: Array,
    },
    cursor: {
      default: "|",
    },
    mode: {
      type: String,
      default: "slide",
      validator(value) {
        return ["slide", "typewriting"].includes(value);
      },
    },
  },
  setup(props) {
    const activeText = ref("");
    const textToRender = ref("");

    let stringNumber;
    const drawString = async () => {
      stringNumber = randomizeInteger(0, props.strings.length - 1, stringNumber);
      activeText.value = props.strings[stringNumber];
    };

    const printString = async (string) => {
      textToRender.value = "";
      for (let letter of string) {
        textToRender.value += letter;
        await sleep(125);
      }
      await sleep(1500);

      if (textToRender.value) {
        for (let letter of textToRender.value) {
          textToRender.value = textToRender.value.substring(0, textToRender.value.length - 1);
          await sleep(25);
        }
      }
      await sleep(300);

      drawString();
      printString(activeText.value);
    };

    var intervalId;
    onMounted(() => {
      activeText.value = props.strings[0];

      // TODO: maybe some factory method?
      switch (props.mode) {
        case "slide": {
          textToRender.value = activeText.value;
          intervalId = window.setInterval(() => {
            drawString();
            textToRender.value = activeText.value;
          }, 2000);
          break;
        }
        case "typewriting": {
          printString(activeText.value);
          break;
        }
        default: {
          new Error("Unknow TextAnimator mode!");
        }
      }
    });
    onUnmounted(() => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    });

    const output = computed(() => {
      if (props.mode === "typewriting") {
        return textToRender.value + props.cursor;
      } else return textToRender.value;
    });

    return { output };
  },
};
</script>

<style>
</style>
