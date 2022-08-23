<template>
  <div class="container content">
    <section id="welcome" class="my-4 py-2 row">
      <div class="my-auto col-12 col-lg-8">
        <p class="welcome m-0 px-3 fs-6 fw-bold">Welcome to my portfolio website!</p>
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
            class="animated-item"
          />
        </h1>
        <p>
          I love to solve problems. Especially when no one else can solve them. Interdisciplinary knowledge combined
          with passion and hobby drives everything I do.
        </p>
      </div>
      <div class="m-auto p-4 p-lg-0 col-12 col-lg-3">
        <div class="avatar round">
          <img
            src="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.6435-9/31159640_1581873875244089_5557646170165084160_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ifml9Rq8rusAX_Zm2tY&_nc_ht=scontent.fpoz2-1.fna&oh=00_AT_PX1e0c93cjDITF8fJWdVIvGUrTGzurQ_7Wp_XWexJ6g&oe=631848F9"
          />
        </div>
      </div>
    </section>

    <section id="aboutme" class="my-4 py-2 row">
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

    <section id="projects" class="my-4 py-2 row">
      <h2>My projects</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia voluptatibus recusandae inventore
        reprehenderit doloribus consequuntur impedit provident atque maxime omnis, sapiente accusantium beatae magnam!
        Repellat perferendis quibusdam reprehenderit sed esse.
      </p>

      <BootstrapCarousel :id="'carousel-projects'" :items="projects">
        <template v-slot="{ index, item, start }">
          <div class="carousel-item py-3" :class="{ active: index == start }">
            <img class="d-block m-auto" :src="item.image" :alt="item.name" />
          </div>
        </template>

        <template #controls-prev-content>
          <span class="icon material-icons-outlined">arrow_back_ios</span>
          <span class="visually-hidden">Previous</span>
        </template>
        <template #controls-next-content>
          <span class="icon material-icons-outlined">arrow_forward_ios</span>
          <span class="visually-hidden">Next</span>
        </template>
      </BootstrapCarousel>

      <TinySlider :id="'gutter'" :data="projects" :items="1" :preventScrollOnTouch="'force'" class="my-1">
        <template #slide="{ item }">
          <div>
            <div class="slide">
              <img :src="item.image" class="d-block w-100" :alt="item.name" />
            </div>
          </div>
        </template>

        <template #controls-prev>
          <div class="ctrbtn">
            <button>
              <span class="material-icons-round">arrow_back</span>
              <span class="d-none">Previous</span>
            </button>
          </div>
        </template>
        <template #controls-next>
          <div class="ctrbtn">
            <button>
              <span class="material-icons-round">arrow_forward</span>
              <span class="d-none">Previous</span>
            </button>
          </div>
        </template>
      </TinySlider>
    </section>

    <section id="skills" class="my-4 py-2 row">
      <h2>My skill set, tools and technologies that I use</h2>
      <p>
        Many years of activities and development on many levels allowed me to master few programming languages,
        frameworks and tools. Below is a list of the most significant parts of my skill set.
      </p>
      <TileGrid :items="skillset" v-slot="slotProp" class="grid mb-3">
        <div class="tile p-0">
          <a
            :href="slotProp.tile.url"
            class="d-flex align-items-center p-2 p-lg-3 w-100 h-100"
            :alt="slotProp.tile.name"
          >
            <img :src="slotProp.tile.image" :alt="slotProp.tile.name" class="m-auto ah-75 aw-75" />
          </a>
        </div>
      </TileGrid>
      <p>
        If You have an order and are looking for a contractor, or You have a problem to solve (especially which no one
        else can solve) in case the scope matches my list - then
        <a href="#contact" role="button" class="p-0 text-reset fw-bold">definitely contact me</a>, and together we will
        definitely work out a solution!
      </p>
    </section>

    <section id="contact" class="my-4 my-lg-5 py-2 row">
      <div class="my-4 my-lg-0 px-3 px-lg-5 py-xl-3 col-lg-6 col-12">
        <img src="@/assets/images/undraw/undraw_envelope.svg" class="img-fluid px-5" alt="Envelope contact image" />
        <div class="contact-info d-flex justify-content-between align-items-center text-white py-3 px-4 px-lg-5">
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
            <a href="#instagram" target="blank" rel="noreferrer" class="text-reset uil uil-instagram"></a>
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
import BootstrapCarousel from "../components/BootstrapCarousel.vue";
import TinySlider from "@/components/TinySlider.vue";

import SkillsetRepository from "@/repositories/SkillsetRepository";
import ProjectsRepository from "@/repositories/ProjectsRepository";

import "@iconscout/unicons/css/line.css";

export default {
  components: { TextAnimator, ContactForm, TileGrid, BootstrapCarousel, TinySlider },
  setup() {
    const skillset = SkillsetRepository.getAll();
    const projects = ProjectsRepository.getAll();

    return { skillset, projects };
  },
};
</script>

<style>
.welcome {
  color: var(--th-body-color-accent);
}

.animated-item {
  color: var(--bs-yellow);
}

.avatar {
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
}
.avatar > img {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease;
}
.avatar > img:hover {
  height: 110%;
  transform: translate(-50%, -46%);
}

.grid {
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3px;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 4px;
  }
}
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media (min-width: 1400px) {
  .grid {
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 5px;
  }
}

.tile {
  width: 100%;
  aspect-ratio: 1.5;
  background-color: rgba(var(--th-body-color-rgb), 0.1);
}
.tile:hover {
  background-color: var(--bs-light);
}
.tile img {
  max-width: 100%;
  max-height: 100%;
  transition: all 0.2s ease;
}
.dark-theme .tile img {
  filter: grayscale(1) invert(0.2);
}
.tile:hover img {
  filter: none;
  transform: scale(1.25);
}
@media (hover: none) {
  .dark-theme .tile {
    background-color: var(--th-whiteblue);
  }
  .tile img {
    filter: none !important;
  }
}

.contact-info {
  background: var(--th-bluegray);
}

.carousel-controls button {
  opacity: 1;
  color: var(--th-body-color-accent);
}
.carousel-controls button:hover {
  color: var(--bs-yellow);
}
.carousel-controls button .icon {
  color: inherit;
  font-size: 60pt;
}
.carousel-item img {
  width: 75%;
  margin: 10px;
  filter: drop-shadow(0 2pt 4pt rgb(125, 125, 125));
}
.dark-theme .carousel-item img {
  filter: contrast(0.85);
}
@media (pointer: coarse) {
  .carousel-item img {
    width: 90%;
  }
  .carousel-controls {
    display: none;
  }
}
.carousel-indicators {
  position: relative !important;
  margin-top: 1em;
}
.carousel-indicators button {
  width: 8px !important;
  height: 0 !important;
  padding-bottom: 8px !important;
  margin: 0 0.4em !important;
  background-color: var(--th-body-color-accent) !important;
  border-radius: 50% !important;
}


.tns-controls > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tns-controls button {
  font-size: 60pt;
}

.tns-item .slide {
  margin: 0 auto;
}
.tns-item img {
  padding: 10px;
  filter: drop-shadow(0 2pt 3pt rgb(125, 125, 125));
}
.dark-theme .tns-item img {
  filter: contrast(0.85) drop-shadow(0 2pt 3pt rgb(175, 175, 175));
}
@media (min-width: 768px) {
  .tns-item .slide {
    width: 80%;
  }
  .tns-item img {
    padding: 25px;
    filter: drop-shadow(0 2pt 8pt rgb(200, 200, 200));
  }
  .dark-theme .tns-item img {
    filter: contrast(0.85) drop-shadow(0 2pt 8pt rgb(175, 175, 175));
  }
}

.tns-nav button {
  padding: 4px !important;
  aspect-ratio: 1 !important;
  margin: 0 0.5em !important;
  border-radius: 50% !important;
}
.tns-nav .tns-nav-active {
  background: var(--bs-gray-700) !important;
}
</style>
