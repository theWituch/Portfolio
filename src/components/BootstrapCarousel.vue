<template>
  <div :id="id" class="carousel slide" :data-bs-ride="ride" :data-bs-touch="touch" :data-bs-interval="interval">
    <div class="carousel-inner">
      <slot name="slides">
        <slot v-for="(item, index) in items" :key="index" :index="index" :item="item" :start="start">
          <div class="carousel-item" :class="{ active: index == start }">
            <img class="d-block w-75 m-auto" :src="item.image" :alt="item.name" />
          </div>
        </slot>
      </slot>
    </div>

    <slot name="controls" :id="id">
      <div class="carousel-controls">
        <slot name="controls-prev" :id="id">
          <button class="carousel-control-prev" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
            <slot name="controls-prev-content" :id="id">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </slot>
          </button>
        </slot>
        <slot name="controls-next" :id="id">
          <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
            <slot name="controls-next-content" :id="id">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </slot>
          </button>
        </slot>
      </div>
    </slot>

    <slot name="indicators" :items="items" :id="id" :start="start">
      <div class="carousel-indicators">
        <slot
          name="indicator"
          v-for="(item, index) in items"
          :key="index"
          :index="index"
          :item="item"
          :id="id"
          :start="start"
        >
          <button
            :key="index"
            type="button"
            :data-bs-target="`#${id}`"
            :data-bs-slide-to="index"
            :class="{ active: index == start }"
            :aria-current="index == start"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script>
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/carousel";

export default {
  // https://getbootstrap.com/docs/5.2/components/carousel/#options
  props: {
    id: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      require: true,
    },
    start: {
      type: Number,
      default: 0,
    },
    interval: {
      type: Number,
      default: 5000,
    },
    ride: {
      type: String,
      default: "carousel",
    },
    touch: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
