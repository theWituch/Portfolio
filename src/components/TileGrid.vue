<template>
  <div class="grid-container">
    <slot v-for="item in items" :key="item.id" :tile="item">
      <div class="grid-tile">
        {{ item.id }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
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

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(v-bind("cols"), 1fr);
  grid-gap: v-bind("gap");
}

.grid-tile {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
