<template>
  <div class="container content">
    <section class="about my-4 py-2">
      <div class="m-auto">
        <p class="welcome m-0 px-3">Welcome to my portfolio website!</p>
        <h1 class="my-4">
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
      <div class="avatar round">
        <img
          src="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.6435-9/31159640_1581873875244089_5557646170165084160_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ifml9Rq8rusAX_Zm2tY&_nc_ht=scontent.fpoz2-1.fna&oh=00_AT_PX1e0c93cjDITF8fJWdVIvGUrTGzurQ_7Wp_XWexJ6g&oe=631848F9"
        />
      </div>
    </section>

    <section class="py-2">
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

    <section>
      <h2 class="text-center">Things I have done or I'm working on now</h2>

      <TinySlider :tns-id="'tns-jeden'" :autoplay="true" :controlsContainer="'#tns-jeden-controls'">
        <template #controls>
          <div id="tns-jeden-controls" class="tns-controls">
            <button>
              <span class="icon material-icons-round">arrow_back_ios</span>
            </button>
            <button>
              <span class="icon material-icons-round">arrow_forward_ios</span>
            </button>
          </div>
        </template>

        <template #prevButton>
          <button>
            <span class="icon material-icons-round">arrow_back</span>
          </button>
        </template>
        <template #nextButton>
          <button>
            <span class="icon material-icons-round">arrow_forward</span>
          </button>
        </template>

        <div class="tns-item">
          <div class="tns-slide">
            <a href="test"><img src="@/assets/images/project/project-image01.png" alt="project img" /></a>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit <a href="#hehe">hehe</a>. Quas, ipsum.
            </p>
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image02.png" alt="project img" />
            <p class="desc">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image03.png" alt="project img" />
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image04.png" alt="project img" />
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image05.png" alt="project img" />
          </div>
        </div>
      </TinySlider>

      <TinySlider :tns-id="'tns-dwa'" :autoplay="true">
        <template #prevButton>
          <button>
            <span class="icon material-icons-round">arrow_back</span>
          </button>
        </template>
        <template #nextButton>
          <button>
            <span class="icon material-icons-round">arrow_forward</span>
          </button>
        </template>

        <div class="tns-item">
          <div class="tns-slide">
            <a href="test"><img src="@/assets/images/project/project-image01.png" alt="project img" /></a>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit <a href="#hehe">hehe</a>. Quas, ipsum.
            </p>
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image02.png" alt="project img" />
            <p class="desc">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image04.png" alt="project img" />
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image05.png" alt="project img" />
          </div>
        </div>
      </TinySlider>

      <TinySlider :tns-id="'tns2'">
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image02.png" alt="project img" />
            <p class="desc">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image04.png" alt="project img" />
          </div>
        </div>
        <div class="tns-item">
          <div class="tns-slide">
            <img src="@/assets/images/project/project-image05.png" alt="project img" />
          </div>
        </div>
      </TinySlider>
    </section>
  </div>
</template>

<script>
import TextAnimator from "@/components/TextAnimator.vue";
import TinySlider from "@/components/TinySlider.vue";

export default {
  components: { TextAnimator, TinySlider },
  setup() {
    return {};
  },
};
</script>

<style>
.about {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.about .welcome {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: var(--accent);
}

.about h1 {
  font-size: 2.8em;
}

.animated-item {
  color: var(--yellow);
}

.avatar {
  width: 80%;
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  margin: auto;
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

.round {
  border-radius: 50%;
}

.tns-slide {
  display: block;
  max-width: 90%;
  margin: auto;
  text-align: center;
}
.tns-slide img {
  margin: 25px auto;
  display: block;
  max-width: 90%;
  filter: drop-shadow(0 2pt 8pt rgb(125, 125, 125));
}
.tns-slide .desc {
  margin: 1.5em auto 25px;
  line-height: 1.2;
}

/*
 *  Responsive
 */

@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
  }
  .about h1 {
    font-size: 2.2em;
    display: flex;
    flex-direction: column;
  }
  .avatar {
    width: 75vw;
    margin-top: 30pt;
  }

  .tns-slide img {
    max-width: 100%;
    filter: drop-shadow(0 2pt 4pt rgb(125, 125, 125));
  }
  .tns-slide .desc {
    margin: 1em auto;
  }
  .tns-controls {
    display: none !important;
  }
}
</style>
