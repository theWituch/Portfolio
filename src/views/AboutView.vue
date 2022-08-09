<template>
  <div class="container content">
    <section>
      <div>
        <p>Welcome to my portfolio website!</p>
        <h1>
          <span class="me-2">Hey folks, I'm</span>
          <TextAnimator
            :strings="[
              'Mateusz Frydrych',
              'Engineer',
              'Developer',
              'Constructor',
              'Designer',
              'Electronics',
              'Electrician',
            ]"
            class="animated-item"
          />
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, quae! Consequatur omnis id vitae fugit? Ea
          ipsum delectus repudiandae asperiores.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import TextAnimator from "@/components/TextAnimator.vue";

export default {
  components: { TextAnimator },
  setup() {
    return {};
  },
};
</script>

<style>
.animated-item {
  color: var(--yellow);
}
</style>
