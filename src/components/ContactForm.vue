<template>
  <form v-bem @submit.prevent="submit">
    <div class="row">
      <div class="col-lg-6 col-12">
        <input
          v-bem:control
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          class="my-2 my-lg-3 form-control"
        />
      </div>

      <div class="col-lg-6 col-12">
        <input
          v-bem:control
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          class="my-2 my-lg-3 form-control"
        />
      </div>

      <div class="col-12">
        <textarea
          v-bem:control
          id="message"
          name="message"
          rows="6"
          placeholder="Message"
          class="my-2 my-lg-3 form-control"
        ></textarea>
      </div>

      <div class="d-flex ms-lg-auto col-lg-5 col-12">
        <input v-bem:submit-button type="submit" class="mt-4 form-control" value="Send" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "contact-form",
};
</script>

<style lang="scss">
.contact-form {
  %form-control {
    min-height: 3em;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;

    &:hover,
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  &__control {
    @extend %form-control;
    color: var(--body-color);
    background: transparent;
    background-color: transparent;
    border-radius: 3px;

    &:hover,
    &:focus {
      color: var(--body-color);
      background-color: transparent;
      border-color: var(--yellow);
    }
  }

  &__submit-button {
    @extend %form-control;
    background: var(--yellow);
    border-radius: 30px;
    color: var(--darkest);
    border: none;
    transition: all 0.4s ease;

    &:focus {
      background: var(--yellow);
    }

    @media (hover: hover) {
      &:hover {
        color: var(--light);
        background: var(--bluegray);
      }
    }
  }
}
</style>
