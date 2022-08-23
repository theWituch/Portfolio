<template>
  <button @click="toggleTheme()" class="color-mode">
    <Transition name="fade-up">
      <span v-if="darkmode" class="icon material-icons-outlined"> dark_mode</span>
    </Transition>
    <Transition name="fade-down">
      <span v-if="!darkmode" class="icon material-icons-outlined"> light_mode </span>
    </Transition>
    <span class="info-text ms-4 ps-1 text-top">{{ placeholder }}</span>
  </button>
</template>

<script>
import useTheme from "@/composables/useTheme";

import "material-icons/iconfont/outlined.css";

export default {
  props: ["placeholder"],
  setup() {
    const { darkmode, toggleTheme } = useTheme();

    return { darkmode, toggleTheme };
  },
};
</script>

<style>
.color-mode {
  position: relative;
  padding: 0;
  background: none;
  border: none;
  color: var(--th-body-color-accent);
  font-weight: bold;
  transition: color 0.3s ease;
}

.color-mode:hover {
  color: var(--bs-link-hover-color);
}

.color-mode span.icon {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.fade-up-enter-active,
.fade-down-enter-active,
.fade-up-leave-active,
.fade-down-leave-active {
  transition: all 0.366s ease-in-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(25px);
}
</style>