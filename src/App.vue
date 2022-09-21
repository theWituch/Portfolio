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

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
