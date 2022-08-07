<template>
  <HeaderBar />
  <router-view />
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
  components: {
    HeaderBar,
  },
  setup() {},
};
</script>

<style>
#app {
  font-family: var(--font-family-sans-serif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
