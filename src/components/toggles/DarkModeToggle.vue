<template>
  <button v-bem @click="toggleTheme()">
    <Transition name="fade-up">
      <span v-bem:icon v-if="darkmode" class="material-icons-outlined"> dark_mode</span>
    </Transition>
    <Transition name="fade-down">
      <span v-bem:icon v-if="!darkmode" class="material-icons-outlined"> light_mode </span>
    </Transition>
    <span v-bem:placeholder class="ps-1 text-top">{{ placeholder }}</span>
  </button>
</template>

<script>
import useTheme from "@/composables/useTheme";

export default {
  name: "dark-mode-toggle",
  props: ["placeholder"],
  setup() {
    const { darkmode, toggleTheme } = useTheme();

    return { darkmode, toggleTheme };
  },
};
</script>

<style lang="scss">
.dark-mode-toggle {
  position: relative;
  padding: 0;
  background: none;
  border: none;
  color: var(--body-color-accent);
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-hover-color);
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    font-size: 1.5em !important;
  }

  &__placeholder {
    margin-left: 1.5em;
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
}
</style>