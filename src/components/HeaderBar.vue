<template>
  <transition name="header">
    <nav v-show="showHeader" class="navbar navbar-expand-lg" :class="{ scrolled }">
      <div class="container py-1">
        <a class="navbar-brand col-lg-3" href="#">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="40"
            class="img-fluid d-inline-block"
          />
          Portfolio logo
        </a>

        <button
          @click="collapsed = !collapsed"
          class="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          :aria-expanded="!collapsed"
          aria-label="Toggle navigation"
        >
          <span :class="{ toggled: !collapsed }" class="toggler-icon material-icons" style="font-size: inherit"
            >menu</span
          >
        </button>

        <div class="navbar-collapse" :class="{ open: !collapsed }">
          <div class="navbar-nav">
            <a href="#aboutme" class="nav-item nav-link" :to="{ name: 'aboutme' }">About me</a>
            <a href="#projects" class="nav-item nav-link" :to="{ name: 'projects' }">Projects</a>
            <a href="#contact" class="nav-item nav-link" :to="{ name: 'about' }">Contact</a>
          </div>
        </div>

        <div class="d-none d-lg-block">
          <DarkModeToggle :placeholder="'Toggle colors'" />
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";

import DarkModeToggle from "./toggles/DarkModeToggle.vue";

export default {
  components: { DarkModeToggle },
  setup() {
    const collapsed = ref(true);
    const scrollHeight = ref(0);

    var lastScrollHeight = null;
    const showHeader = computed(() => {
      let result = scrollHeight.value <= lastScrollHeight;
      lastScrollHeight = scrollHeight.value;
      return result;
    });
    watch(showHeader, (showing) => {
      if (!showing) {
        collapsed.value = true;
      }
    });

    const handleScroll = () => {
      scrollHeight.value = window.scrollY;
    };
    const scrolled = computed(() => {
      return scrollHeight.value !== 0 && showHeader.value;
    });

    return { handleScroll, showHeader, collapsed, scrolled };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  margin: 0 auto;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999999;
  background-color: var(--bs-body-bg);
  color: var(--th-body-color-accent);
  font-size: 16px;
}
.navbar {
  --bs-navbar-color: var(--th-body-color-accent);
  --bs-navbar-brand-color: var(--th-body-color-accent);
}
.navbar.scrolled {
  border-bottom: 1px solid var(--th-navbar-border-color);
}

.header-enter-active,
.header-leave-active {
  transition: all 0.3s ease;
}
.header-enter-from,
.header-leave-to {
  transform: translateY(-100%);
}

.navbar-nav {
  --bs-nav-link-color: var(--th-nav-link-color);
  --bs-nav-link-hover-color: var(--th-nav-link-hover-color);
  --bs-nav-link-disabled-color: var(--th-nav-link-disabled-color);
}

.nav-item {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
}

.navbar-toggler {
  border: none;
  box-shadow: none;
  font-size: 35px;
}
.navbar-toggler:focus {
  box-shadow: none;
}

/* 
 *  Responsive 
 */
@media (max-width: 768px) {
  .toggler-icon {
    transition: transform 0.4s ease;
  }
  .toggler-icon.toggled {
    transform: rotate(90deg);
  }

  .navbar-collapse {
    overflow: hidden;
    max-height: 0;
    transition: max-height 1s cubic-bezier(0, 1, 0, 1);
  }
  .navbar-collapse.open {
    max-height: 100vh;
    transition: max-height 1s ease-out;
  }
}
</style>