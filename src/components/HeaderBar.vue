<template>
  <transition name="header">
    <nav v-show="showHeader" class="header">
      <div class="container">
        <div class="brand">
          <p>Portfolio logo</p>
        </div>

        <div class="navigation flex">
          <div class="toggle flex">
            <button @click="collapsed = !collapsed" class="toggle">
              <span :class="{ toggled: !collapsed }" class="toggle-icon material-icons" style="font-size: inherit"
                >menu</span
              >
            </button>
          </div>

          <ul class="nav-list" :class="{ collapsed }">
            <li>
              <router-link class="nav-link" :to="{ name: 'about' }"> About me </router-link>
            </li>
            <li>
              <router-link class="nav-link" :to="{ name: 'about' }"> Carrer </router-link>
            </li>
            <li>
              <router-link class="nav-link" :to="{ name: 'about' }"> Projects </router-link>
            </li>
            <li>
              <router-link class="nav-link" :to="{ name: 'about' }"> Contact </router-link>
            </li>
          </ul>
        </div>

        <div class="colormode flex">
          <DarkModeToggle :placeholder="'Toggle colors'" />
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

import DarkModeToggle from "./toggles/DarkModeToggle.vue";

export default {
  components: { DarkModeToggle },
  setup() {
    const collapsed = ref(true);
    const scrollHeight = ref(0);
    const showHeader = computed(() => {
      let result = scrollHeight.value < 5;
      if (!result) {
        collapsed.value = true;
      }
      return result;
    });
    const handleScroll = () => {
      scrollHeight.value = window.scrollY;
    };
    return { handleScroll, showHeader, collapsed };
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
.header {
  position: fixed;
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999999;
  background: transparent;
}

.header > .container {
  min-height: 80px;
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  grid-column-gap: 10px;
  background: inherit;
}

.header-enter-active,
.header-leave-active {
  transition: all 0.3s ease;
}

.header-enter-from,
.header-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

div .brand {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 10px;
  /* TODO: remove when logo added */
  visibility: hidden;
}

div .navigation {
  overflow: hidden;
  background: transparent;
}

.nav-list {
  margin: 0;
  padding: 0;
  display: inline-flex;
  overflow: hidden;
}

.nav-list li {
  list-style: none;
  width: 100%;
}

.nav-link {
  display: block;
  padding: 10px 20px;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--yellow);
}

/* 
 *  Responsive 
 */

@media (max-width: 768px) {
  .header > .container {
    grid-template-columns: 1fr;
  }

  .toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 12%;
    z-index: 999998;
    border: 0;
    cursor: pointer;
    font-size: 35px;
    background-color: transparent;
  }

  .toggle-icon {
    transition: transform 0.4s ease;
  }

  .toggle-icon.toggled {
    transform: rotate(90deg);
  }

  .nav-list {
    top: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background);
    /* border-bottom: 1px solid var(--gray); */
    transition: all 0.75s ease;
  }

  .nav-list.collapsed {
    visibility: hidden;
    transform: translateY(-100%);
  }

  .colormode {
    display: none;
  }
}

@media (min-width: 768px) {
  .toggle {
    visibility: hidden;
  }

  .nav-list li:first-child {
    margin-left: 20px;
  }
}
</style>