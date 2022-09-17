<template>
  <div v-bem>
    <slot v-for="item in items" :key="item.id" :tile="item">
      <div v-bem:tile>
        {{ item.id }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "tile-grid",
  props: {
    items: {
      type: Object,
      require: true,
    },
    cols: {
      type: Number,
      default: 5,
    },
    gap: {
      type: String,
      default: "5px",
    },
  },
};
</script>

<style lang="scss">
.tile-grid {
  display: grid;
  grid-template-columns: repeat(v-bind("cols"), 1fr);
  grid-gap: v-bind("gap");

  &__tile {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
