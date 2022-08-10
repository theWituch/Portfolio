<template>
  <HeaderBar />
  <router-view />
  <FooterBar />
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
  setup() {},
};
</script>

<style>
#app {
  font-family: var(--font-family-sans-serif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
