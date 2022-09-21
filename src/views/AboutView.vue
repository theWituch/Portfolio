<template>
  <div v-bem class="container content">
    <section v-bem:welcome-section id="welcome" class="my-4 py-2 row">
      <div class="my-auto col-12 col-lg-8">
        <p class="m-0 fs-6 fw-bold greeting-message">Welcome to my portfolio website!</p>
        <h1 class="my-4 d-flex flex-column d-lg-block">
          <span class="me-3">Hey folks, I'm</span>
          <TextAnimator
            :strings="[
              'Mateusz Frydrych.',
              'Engineer.',
              'Developer.',
              'Constructor.',
              'Designer.',
              'Electronics Engr.',
              'Electrician.',
            ]"
            :mode="'typewriting'"
            class="animated-text"
          />
        </h1>
        <p>
          I love to solve problems. Especially when no one else can solve them. Interdisciplinary knowledge combined
          with passion and hobby drives everything I do.
        </p>
      </div>
      <div class="m-auto p-4 p-lg-0 col-12 col-lg-3 avatar">
        <div class="avatar__wrapper">
          <img :src="require('@/assets/images/avatar.jpg')" class="avatar__image" />
        </div>
      </div>
    </section>

    <section v-bem:aboutme-section id="aboutme" class="my-4 py-2 row">
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia voluptatibus recusandae inventore
        reprehenderit doloribus consequuntur impedit provident atque maxime omnis, sapiente accusantium beatae magnam!
        Repellat perferendis quibusdam reprehenderit sed esse.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque sunt. Adipisci repellendus officia aperiam
        architecto aliquam, ex odit? Quidem maiores autem eos, beatae repudiandae inventore tenetur veritatis
        perferendis quaerat. Placeat nobis mollitia et laboriosam veniam earum fugit provident eius quod illo doloribus
        consequatur, eos numquam eum velit tempore, harum dolorem aperiam! Nobis impedit quam modi rem neque nostrum
        dolor doloremque commodi aspernatur provident libero, autem voluptatum soluta et corporis.
      </p>
    </section>

    <section v-bem:projects-section id="projects" class="my-4 py-2 row">
      <h2>My projects</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia voluptatibus recusandae inventore
        reprehenderit doloribus consequuntur impedit provident atque maxime omnis, sapiente accusantium beatae magnam!
        Repellat perferendis quibusdam reprehenderit sed esse.
      </p>

      <TinySlider :id="'tns-projects'" :data="projects" :items="1" :preventScrollOnTouch="'force'" class="my-1">
        <template #slide="{ item }">
          <div>
            <div class="tiny-slider__slide">
              <img :src="item.image" class="d-block w-100 tiny-slider__slide-image" :alt="item.name" />
            </div>
          </div>
        </template>

        <template #controls-prev>
          <div class="tiny-slider__controls-wrapper">
            <button class="tiny-slider__controls-button">
              <span class="material-icons-round">arrow_back</span>
              <span class="d-none">Previous</span>
            </button>
          </div>
        </template>
        <template #controls-next>
          <div class="tiny-slider__controls-wrapper">
            <button class="tiny-slider__controls-button">
              <span class="material-icons-round">arrow_forward</span>
              <span class="d-none">Previous</span>
            </button>
          </div>
        </template>
      </TinySlider>
    </section>

    <section v-bem:skills-section id="skills" class="my-4 py-2 row">
      <h2>My skill set, tools and technologies that I use</h2>
      <p>
        Many years of activities and development on many levels allowed me to master few programming languages,
        frameworks and tools. Below is a list of the most significant parts of my skill set.
      </p>

      <div class="mb-4 mt-1 mt-lg-4 skillset-grid">
        <OptionsPanel
          :id="'skillset-filter'"
          :options="skillsetCategories"
          v-model="activeSkillsetCategories"
          class="mb-3 skillset-grid__options"
        />

        <TileGrid :items="filteredSkills" v-slot="slotProp" class="skillset-grid__grid">
          <div class="p-0 tile-grid__tile">
            <a
              :href="slotProp.tile.url"
              class="d-flex align-items-center p-2 p-lg-3 w-100 h-100"
              :alt="slotProp.tile.name"
            >
              <img
                :src="slotProp.tile.image"
                :alt="slotProp.tile.name"
                class="m-auto ah-75 aw-75 tile-grid__tile-image"
              />
            </a>
          </div>
        </TileGrid>
      </div>

      <p>
        If You have an order and are looking for a contractor, or You have a problem to solve (especially which no one
        else can solve) in case the scope matches my list - then
        <a href="#contact" role="button" class="p-0 text-reset fw-bold">definitely contact me</a>, and together we will
        definitely work out a solution!
      </p>
    </section>

    <section v-bem:contact-section id="contact" class="my-4 my-lg-5 py-2 row">
      <div class="my-4 my-lg-0 px-3 px-lg-5 py-xl-3 col-lg-6 col-12">
        <img src="@/assets/images/undraw/undraw_envelope.svg" class="img-fluid px-5" alt="Envelope contact image" />
        <div class="d-flex justify-content-between align-items-center text-white py-3 px-4 px-lg-5 contact-info">
          <div class="d-flex flex-column">
            <h3 class="mb-3 text-reset">Mateusz Frydrych</h3>
            <span class="mb-0 text-reset uil uil-phone">&nbsp;+48 726 140 859</span>
            <a href="mailto:thewituch@gmail.com" class="text-reset uil uil-envelope">&nbsp;thewituch@gmail.com</a>
          </div>
          <div class="d-flex flex-column p-0 fs-5 text-light">
            <a
              href="https://www.facebook.com/Wituuuuuch"
              target="blank"
              rel="noreferrer"
              class="text-reset uil uil-facebook"
            ></a>
            <a
              href="https://github.com/theWituch"
              target="blank"
              rel="noreferrer"
              class="text-reset uil uil-github"
            ></a>
            <a
              href="https://discordapp.com/users/226816245125742599"
              target="blank"
              rel="noreferrer"
              class="text-reset uil uil-discord"
            ></a>
            <a href="#youtube" target="blank" rel="noreferrer" class="text-reset uil uil-youtube"></a>
          </div>
        </div>
      </div>
      <div class="my-4 my-lg-0 p-3 col-lg-6 col-12">
        <h2>Interested to work together? Let's talk</h2>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script>
import TextAnimator from "@/components/TextAnimator.vue";
import ContactForm from "@/components/ContactForm.vue";
import TileGrid from "@/components/TileGrid.vue";
import TinySlider from "@/components/TinySlider.vue";
import OptionsPanel from "@/components/OptionsPanel.vue";

import SkillsetRepository from "@/repositories/SkillsetRepository";
import ProjectsRepository from "@/repositories/ProjectsRepository";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "about-view",
  components: { TextAnimator, ContactForm, TileGrid, TinySlider, OptionsPanel },
  setup() {
    const skillset = SkillsetRepository.getAll();
    const projects = ProjectsRepository.getAll();

    const skillsetCategories = skillset
      .map((project) => [...project.category])
      .reduce((acc, category) => {
        let newCategories = category.filter((cat) => !acc.includes(cat));
        return acc.concat(newCategories);
      })
      .sort();
    const activeSkillsetCategories = ref([]);
    const filteredSkills = computed(() => {
      return skillset.filter((skill) => {
        return skill.category?.some((cat) => activeSkillsetCategories.value.includes(cat));
      });
    });

    return {
      skillset,
      projects,
      skillsetCategories,
      activeSkillsetCategories,
      filteredSkills,
    };
  },
};
</script>

<style lang="scss">
.about-view {
  &__welcome-section {
    .greeting-message {
      color: var(--body-color-accent);
    }
    .animated-text {
      color: var(--yellow);
    }
    .avatar {
      &__wrapper {
        @include rounded-box;
        aspect-ratio: 1;
        overflow: hidden;
        position: relative;
      }
      &__image {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        transition: 0.3s ease;

        &:hover {
          height: 110%;
          transform: translate(-50%, -46%);
        }
      }
    }
  }

  &__aboutme-section {
  }

  &__projects-section {
    .tiny-slider {
      $parent: &;

      &__controls {
        &-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &-button {
          font-size: 55pt;
        }
      }

      &__nav {
        &-button {
          padding: 4px;
          aspect-ratio: 1;
          margin: 0 0.5em;
          border-radius: 50%;
          background: var(--body-color-accent);
          opacity: 0.5;
        }
      }

      &__slide {
        margin: 0 auto;

        @include media-breakpoint-up(md) {
          width: 80%;
        }

        &-image {
          padding: 10px;
          filter: drop-shadow(0 2pt 2pt rgb(125, 125, 125));

          @at-root .dark-theme > #{&} {
            filter: contrast(0.85) drop-shadow(0 2pt 2pt rgb(175, 175, 175));
          }

          @include media-breakpoint-up(md) {
            padding: 25px;
            filter: drop-shadow(0 2pt 4pt rgb(125, 125, 125));

            @at-root .dark-theme > #{&} {
              filter: contrast(0.85) drop-shadow(0 2pt 4pt rgb(175, 175, 175));
            }
          }
        }
      }
    }
  }

  &__skills-section {
    .skillset-grid {
      .options-panel {
        @mixin panel-button {
          width: 100%;
          padding: 0.2em 1em;
          color: var(--darkest);
          border: none;
          border-radius: 3em;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        &__controls-button {
          @include panel-button;
          color: var(--light);
          background: var(--options-panel-controls-bg);

          @media (hover: hover) {
            &:hover {
              color: var(--darkest);
              background: var(--yellow);
            }
          }
        }

        .bistable-button {
          @include panel-button;
          color: var(--body-color);
          background: var(--options-panel-button-bg);

          @media (hover: hover) {
            &:hover {
              color: var(--light);
              background: var(--bluegray);
            }
          }

          &--is-pressed {
            color: var(--darkest);
            background: var(--yellow);
          }
        }
      }

      .tile-grid {
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 3px;

        @include media-breakpoint-up(md) {
          grid-template-columns: repeat(6, 1fr);
        }
        @include media-breakpoint-up(lg) {
          grid-template-columns: repeat(7, 1fr);
          grid-gap: 4px;
        }
        @include media-breakpoint-up(xl) {
          grid-template-columns: repeat(8, 1fr);
        }
        @include media-breakpoint-up(xxl) {
          grid-template-columns: repeat(9, 1fr);
          grid-gap: 5px;
        }

        &__tile {
          width: 100%;
          aspect-ratio: 1.5;
          background-color: opacify-rgb-var(--body-color-rgb, 0.1);

          &:hover {
            background-color: var(--light);

            img {
              filter: none;
              transform: scale(1.25);
            }
          }

          @media (hover: none) {
            @at-root .dark-theme #{&} {
              background-color: var(--whiteblue);
            }

            img {
              filter: none !important;
            }
          }
        }

        &__tile-image {
          max-width: 100%;
          max-height: 100%;
          transition: all 0.2s ease;

          @at-root .dark-theme #{&} {
            filter: grayscale(1) invert(0.2);
          }
        }
      }
    }
  }

  &__contact-section {
    .contact-info {
      background: var(--bluegray);
    }
  }
}
</style>
