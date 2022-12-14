<template>
  <div v-bem>
    <div v-bem:wrapper>
      <div :id="id">
        <slot v-if="!data">If data not passed then process default slot from parent</slot>
        <slot v-else name="slide" v-for="(item, index) in data" :key="index" :id="id" :index="index" :item="item">
          <div>
            <div v-bem:slide class="dummy">
              <span class="d-block w-100 h-100">{{ index }}:{{ item }}</span>
            </div>
          </div>
        </slot>
      </div>

      <slot name="controls" :id="id">
        <div v-bem:controls>
          <slot name="controls-prev" :id="id">
            <button v-bem:controls-button>
              <span class="material-icons-round">arrow_back_ios</span>
              <span class="d-none">Previous</span>
            </button>
          </slot>
          <slot name="controls-next" :id="id">
            <button v-bem:controls-button>
              <span class="material-icons-round">arrow_forward_ios</span>
              <span class="d-none">Next</span>
            </button>
          </slot>
        </div>
      </slot>
    </div>

    <slot name="navigation" :id="id" :data="data">
      <div v-bem:nav :id="navContainer" class="my-1" aria-label="Carousel Pagination">
        <slot name="navigation-item" v-for="(item, index) in data" :key="index" :index="index" :item="item">
          <button v-bem:nav-button type="button">
            <span class="d-none">{{ index }}</span>
          </button>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script>
import { tns } from "tiny-slider";
import { onMounted, onUpdated } from "@vue/runtime-core";

import "tiny-slider/dist/tiny-slider.css";

export default {
  name: "tiny-slider",
  props: {
    id: {
      type: String,
      required: true,
      default: "tns",
    },
    data: {
      type: Object,
      required: true,
    },
    items: {
      type: Number,
      default: 1,
    },
    slideBy: {
      type: Number,
      default: 1,
    },
    speed: {
      type: Number,
      default: 400,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    autoplayButtonOutput: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    gutter: {
      type: Number,
      default: 0,
    },
    autoHeight: {
      type: Boolean,
      default: true,
    },
    controlsContainer: {
      type: String,
      default: ".tiny-slider__controls",
    },
    navContainer: {
      type: String,
      default: ".tiny-slider__nav",
    },
    mouseDrag: {
      type: Boolean,
      default: true,
    },
    swipeAngle: {
      type: Number,
      default: 15,
    },
    preventScrollOnTouch: {
      type: String,
      default: "auto",
    },
  },
  setup(props) {
    let tnsInstance = null;

    onMounted(() => {
      tnsInstance = tns({
        container: "#" + props.id,
        items: props.items,
        slideBy: props.slideBy,
        loop: props.loop,
        autoplay: props.autoplay,
        autoplayButtonOutput: props.autoplayButtonOutput,
        speed: props.speed,
        autoHeight: props.autoHeight,
        controlsContainer: props.controlsContainer,
        navContainer: props.navContainer,
        mouseDrag: props.mouseDrag,
        gutter: props.gutter,
        swipeAngle: props.swipeAngle,
        center: props.center,
        preventScrollOnTouch: props.preventScrollOnTouch,
      });
    });

    onUpdated(() => {
      tnsInstance.rebuild();
    });

    return {};
  },
};
</script>

<style lang="scss">
.tiny-slider {
  &__wrapper {
    position: relative;
    width: 100%;
  }

  &__controls {
    height: 100%;
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: inline-flex;
    justify-content: space-between;
    pointer-events: none;

    @media (pointer: coarse) {
      display: none;
    }

    &-button {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      font-size: 2em;
      font-weight: bolder;
      color: var(--body-color-accent);
      pointer-events: all;

      &:hover {
        color: var(--link-hover-color);
      }
    }
  }

  &__nav {
    width: 100%;
    position: relative;
    display: inline-flex;
    justify-content: center;
    z-index: 3;

    &-button {
      margin: 0.5ex;
      padding-bottom: 0.5ex;
      background: var(--body-color);
      opacity: 0.25;
      border: none;

      // This class is generated by tiny-slider library and cannot be BEMed...
      &.tns-nav-active {
        opacity: 1 !important;
      }
    }
  }

  &__slide {
    width: 100%;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }

  // This class is generated by tiny-slider library and cannot be BEMed...
  .tns-item:nth-child(n + 1) .dummy {
    background: hsl(110, 60%, 60%);
  }
  .tns-item:nth-child(2n + 1) .dummy {
    background: hsl(31, 81%, 46%);
  }
  .tns-item:nth-child(3n + 1) .dummy {
    background: hsl(227, 78%, 45%);
  }
}
</style>
