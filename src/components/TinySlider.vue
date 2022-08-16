<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css" />

  <div class="tns">
    <div :id="tnsId">
      <slot>Here will be placed tiny slider content.</slot>
    </div>
    <slot name="controls">
      <div :id="tnsControlsId" class="tns-controls">
        <slot name="prevButton">
          <button>&lt;</button>
        </slot>
        <slot name="nextButton">
          <button>&gt;</button>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script>
import { tns } from "tiny-slider";
import { computed, onMounted, onUpdated } from "@vue/runtime-core";

export default {
  props: {
    tnsId: {
      type: String,
      required: true,
      default: "tns",
    },
    items: {
      type: Number,
      default: 1,
    },
    slideBy: {
      type: Number,
      default: 1,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    autoplayButtonOutput: {
      type: Boolean,
      default: false,
    },
    speed: {
      type: Number,
      default: 400,
    },
    autoHeight: {
      type: Boolean,
      default: true,
    },
    navPosition: {
      type: String,
      default: "bottom",
    },
    mouseDrag: {
      type: Boolean,
      default: true,
    },
    controlsContainer: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const tnsControlsId = props.tnsId + "-controls";

    const controls = computed(() => {
      return props.controlsContainer ? props.controlsContainer : "#" + tnsControlsId;
    });

    let tnsInstance = null;
    onMounted(() => {
      tnsInstance = tns({
        container: "#" + props.tnsId,
        items: props.items,
        slideBy: props.slideBy,
        loop: props.loop,
        autoplay: props.autoplay,
        autoplayButtonOutput: props.autoplayButtonOutput,
        speed: props.speed,
        autoHeight: props.autoHeight,
        controlsContainer: controls.value,
        navPosition: props.navPosition,
        mouseDrag: props.mouseDrag,
      });
    });
    onUpdated(() => {
      tnsInstance.rebuild();
    });

    return { tnsControlsId };
  },
};
</script>

<style>
.tns {
  margin: auto;
  position: relative;
  padding: 1em 0;
}

.tns-item {
  display: block;
  max-width: 90%;
  margin: auto;
}

.tns-slide {
  display: block;
}
.tns-slide img {
  margin: auto;
  display: block;
  max-width: 100%;
}

.tns-controls {
  display: inline-flex;
  justify-content: space-between;
  position: absolute;
  bottom: 50%;
  right: 0;
  left: 0;
}
.tns-controls button {
  border: none;
  background: none;
  font-size: 32pt;
  font-weight: 600;
  cursor: pointer;
}
.tns-controls button > :first-child {
  transform: translate(0, 50%);
}

.tns-nav {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}
.tns-nav button {
  padding: 4px;
  margin: 1ex;
  aspect-ratio: 1;
  border: none;
  border-radius: 50%;
}
.tns-nav .tns-nav-active {
  background: black;
}

@media (max-width: 768px) {
  .tns-controls {
    display: none !important;
  }
}
</style>