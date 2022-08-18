<template>
  <div class="container content">
    <section class="my-4 py-2 row">
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
              'Electronics.',
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

    <section class="hiddenn py-2">
      <h2>Lorem, ipsum dolor</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat commodi necessitatibus debitis nihil
        aut soluta! Ipsa, atque aut vel illo libero cumque officiis itaque rem, perferendis, recusandae quis voluptatem
        blanditiis voluptatibus qui amet deserunt doloribus labore. In, repellat optio delectus cupiditate reprehenderit
        veniam molestiae vel omnis eius impedit. Cupiditate neque laudantium temporibus, libero iure non ut quisquam
        impedit accusantium perspiciatis dignissimos magni aliquam delectus sequi sed vel itaque, explicabo similique
        eveniet ad sit! Amet commodi accusantium quam numquam, fugiat nemo tenetur. Quod, qui non consequatur recusandae
        ducimus neque repellendus exercitationem similique debitis ut praesentium ullam labore, voluptate nisi quibusdam
        veniam. Quas illum repellendus molestias explicabo nesciunt dolorem sit, molestiae vitae corporis pariatur
        quaerat, animi vel culpa deleniti ea eveniet dolorum. Qui, sint? Dignissimos quisquam nisi unde, explicabo alias
        beatae aliquid consectetur expedita minima consequuntur. Itaque ducimus reprehenderit voluptatem a voluptas
        minus repudiandae minima, porro culpa eos dolores recusandae commodi deleniti facere consectetur amet et! Eaque
        libero accusamus eius, perspiciatis, corporis labore, error earum excepturi praesentium sit rem veniam debitis.
        In eum aspernatur blanditiis incidunt sit officia error obcaecati eos quod quasi. Ex quasi obcaecati adipisci,
        iste illum suscipit aliquid aspernatur fugit rerum velit harum voluptates molestiae corrupti error vero.
      </p>
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
</style>
