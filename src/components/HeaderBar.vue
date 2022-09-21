<template>
  <transition name="header">
    <nav v-bem="{ isScrolled: scrolled || !collapsed }" v-show="showHeader" class="navbar navbar-expand-lg">
      <div class="container py-1">
        <a v-bem:brand class="navbar-brand col-lg-3" href="#">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="40"
            class="img-fluid d-inline-block"
          />
          Portfolio
        </a>

        <button
          v-bem:toggler
          @click="collapsed = !collapsed"
          class="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          :aria-expanded="!collapsed"
          aria-label="Toggle navigation"
        >
          <span v-bem:toggler-icon="{ isToggled: !collapsed }" class="material-icons">menu</span>
        </button>

        <div v-bem:menu="{ isExpanded: !collapsed }" class="navbar-collapse">
          <div class="navbar-nav">
            <a v-bem:menu-item href="#aboutme" class="nav-link" :to="{ name: 'aboutme' }">About me</a>
            <a v-bem:menu-item href="#projects" class="nav-link" :to="{ name: 'projects' }">Projects</a>
            <a v-bem:menu-item href="#contact" class="nav-link" :to="{ name: 'about' }">Contact</a>
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
  name: "header-bar",
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

<style lang="scss">
.header-bar {
  position: fixed;
  margin: 0 auto;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999999;
  background-color: var(--body-bg);
  color: var(--body-color-accent);
  font-size: 16px;
  color: var(--body-color);

  &--is-scrolled {
    border-bottom: 1px solid var(--navbar-border-color);
  }

  &__brand {
    font-weight: bold;
  }

  &__menu {
    &-item {
      width: 100%;
      text-align: center;
      white-space: nowrap;
      font-weight: bold;
    }

    @include media-breakpoint-down(lg) {
      overflow: hidden;
      max-height: 0;
      transition: max-height 1s cubic-bezier(0, 1, 0, 1);

      &--is-expanded {
        max-height: 100vh;
        transition: max-height 1s ease-out;
      }
    }
  }

  &__toggler {
    border: none;
    box-shadow: none;
    font-size: 35px;

    &:focus {
      box-shadow: none;
    }
  }

  &__toggler-icon {
    font-size: inherit;
    transition: transform 0.4s ease;

    &--is-toggled {
      transform: rotate(90deg);
    }
  }
}

.header-enter-active,
.header-leave-active {
  transition: all 0.3s ease;
}
.header-enter-from,
.header-leave-to {
  transform: translateY(-100%);
}
</style>
