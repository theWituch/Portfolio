import { ref, watchEffect } from "vue";

const darkmode = ref(false);
darkmode.value = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; // load from browser; TODO: store in cache when switched

const toggleTheme = () => {
  darkmode.value = !darkmode.value;
};

watchEffect(() => {
  document.documentElement.className = darkmode.value ? "dark-theme" : "light-theme";
});

const useTheme = () => {
  return { darkmode, toggleTheme };
};

export default useTheme;
