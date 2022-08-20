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
        dolor doloremque commodi aspernatur provident libero, autem voluptatum soluta et corporis. Voluptate, tempora.
        Et itaque, quasi iste reprehenderit asperiores atque ducimus reiciendis vitae omnis libero facere odit fuga
        aliquam impedit voluptatibus, ea eligendi, minima assumenda temporibus porro voluptatem aspernatur quas?
        Eligendi asperiores dolores hic! Nemo, eaque ab accusantium beatae velit eos repellat cumque ut quam,
        voluptatibus, blanditiis autem consequatur? Quae recusandae incidunt, soluta deleniti animi reprehenderit
        veritatis vitae, beatae sint aperiam, aliquid in necessitatibus! Soluta itaque aliquid culpa at. Saepe dolorem
        quam quis aliquid nesciunt odit, reiciendis hic minima sint et?
      </p>
    </section>

    <section id="projects" class="my-4 py-2 row">
      <h2>My projects</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia voluptatibus recusandae inventore
        reprehenderit doloribus consequuntur impedit provident atque maxime omnis, sapiente accusantium beatae magnam!
        Repellat perferendis quibusdam reprehenderit sed esse.
      </p>
    </section>

    <section id="skills">
      <h2>Skillset I have and technlogies I use</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem vitae similique, quisquam, veritatis
        labore magnam eos qui nulla laudantium eveniet consequatur, corporis iure amet placeat eum? Aspernatur, ducimus
        libero.
      </p>
      <TileGrid :items="gridItems" v-slot="slotProp" class="grid mb-3">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae numquam blanditiis et ullam, sed nobis
        culpa in eligendi expedita, assumenda perferendis deleniti sint cupiditate voluptatum ex accusamus dicta aut!
      </p>
    </section>

    <section id="contact" class="my-4 py-2 pe-lg-5 row">
      <div class="p-3 px-lg-5 col-lg-6 col-12">
        <img src="@/assets/images/undraw/undraw_envelope.svg" class="img-fluid px-5" alt="Envelope contact image" />

        <div class="contact-info d-flex justify-content-between align-items-center text-white py-3 px-4 px-lg-5">
          <div class="d-flex flex-column ">
            <h3 class="mb-3 text-reset">Mateusz Frydrych</h3>
            <span class="mb-0 text-reset uil uil-phone">&nbsp;+48 726 140 859</span>
            <a href="mailto:thewituch@gmail.com" class="text-reset uil uil-envelope">&nbsp;thewituch@gmail.com</a>
          </div>
          <div class="d-flex flex-column p-0 fs-5 text-light">
            <a href="https://www.facebook.com/Wituuuuuch" target="blank" rel="noreferrer" class="text-reset uil uil-facebook"></a>
            <a href="https://github.com/theWituch" target="blank" rel="noreferrer" class="text-reset uil uil-github"></a>
            <a href="#instagram" target="blank" rel="noreferrer" class="text-reset uil uil-instagram"></a>
            <a href="#youtube" target="blank" rel="noreferrer" class="text-reset uil uil-youtube"></a>
          </div>
        </div>
      </div>
      <div class="p-3 col-lg-6 col-12">
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

import "@iconscout/unicons/css/line.css";

export default {
  components: { TextAnimator, ContactForm, TileGrid },
  setup() {
    const gridItems = {
      java: {
        name: "Java",
        url: "https://www.java.com/",
        image: require("@/assets/images/icons/java.svg"),
      },
      javascript: {
        name: "JavaScript",
        url: "https://www.javascript.com/",
        image: require("@/assets/images/icons/javascript.svg"),
      },
      php: {
        name: "PHP",
        url: "https://www.php.net/",
        image: require("@/assets/images/icons/php.svg"),
      },
      cpp: {
        name: "C++",
        url: "https://wikipedia.org/wiki/C++",
        image: require("@/assets/images/icons/cpp.svg"),
      },
      c: {
        name: "C",
        url: "https://simple.wikipedia.org/wiki/C_(programming_language)",
        image: require("@/assets/images/icons/c.svg"),
      },
      python: {
        name: "Python",
        url: "https://www.python.org/",
        image: require("@/assets/images/icons/python.svg"),
      },
      groovy: {
        name: "Groovy",
        url: "https://groovy-lang.org/",
        image: require("@/assets/images/icons/groovy.svg"),
      },

      nodejs: {
        name: "Node.JS",
        url: "https://www.nodejs.org/",
        image: require("@/assets/images/icons/nodejs.svg"),
      },
      vuejs: {
        name: "Vue.JS",
        url: "https://www.vuejs.org/",
        image: require("@/assets/images/icons/vue-js.svg"),
      },
      bootstrap: {
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
        image: require("@/assets/images/icons/bootstrap-5.svg"),
      },
      html: {
        name: "HTML5",
        url: "https:///",
        image: require("@/assets/images/icons/html.svg"),
      },
      css: {
        name: "CSS3",
        url: "https:///",
        image: require("@/assets/images/icons/css.svg"),
      },

      git: {
        name: "Git",
        url: "https://git-scm.com/",
        image: require("@/assets/images/icons/git.svg"),
      },
      maven: {
        name: "Maven",
        url: "https://maven.apache.org/",
        image: require("@/assets/images/icons/maven.svg"),
      },
      gradle: {
        name: "Gradle",
        url: "https://gradle.org/",
        image: require("@/assets/images/icons/gradle.svg"),
      },

      markdown: {
        name: "Markdown",
        image: require("@/assets/images/icons/markdown.svg"),
      },

      eclipse: {
        name: "Eclipse IDE",
        url: "https://www.eclipse.org/",
        image: require("@/assets/images/icons/eclipse.svg"),
      },
      intellij: {
        name: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
        image: require("@/assets/images/icons/intellij_idea.svg"),
      },
      vscode: {
        name: "Visial Studio Code",
        url: "https://code.visualstudio.com/",
        image: require("@/assets/images/icons/vscode.svg"),
      },

      arduino: {
        name: "Arduino",
        url: "https://www.arduino.cc/",
        image: require("@/assets/images/icons/arduino.svg"),
      },
      mplabx: {
        name: "MPLAB X IDE",
        url: "https://www.microchip.com/mplab/",
        image: require("@/assets/images/icons/mplabx.png"),
      },

      fusion360: {
        name: "Fusion360",
        url: "https://www.autodesk.pl/products/fusion-360/",
        image: require("@/assets/images/icons/fusion360.png"),
      },
      eagle: {
        name: "Eagle",
        url: "https://eagle.autodesk.com/eagle",
        image: require("@/assets/images/icons/eagle.png"),
      },
      eplanelectric: {
        name: "EPLAN Electric",
        url: "https://www.eplan.com/",
        image: require("@/assets/images/icons/eplan.png"),
      },
    };

    // Tricky insert ID key to each grid item
    Object.entries(gridItems).forEach((e, i) => {
      gridItems[e[0]].id = i;
    });

    return { gridItems };
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
  grid-template-columns: repeat(9, 1fr);
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3px;
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

.contact-info {
  background: var(--th-bluegray);
}
</style>
