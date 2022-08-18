<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div class="col-lg-6 col-12">
        <input id="name" type="text" name="name" placeholder="Your Name" class="form-control" />
      </div>

      <div class="col-lg-6 col-12">
        <input id="email" type="email" name="email" placeholder="Your Email" class="form-control" />
      </div>

      <div class="col-12">
        <textarea id="message" name="message" rows="6" placeholder="Message" class="form-control"></textarea>
      </div>

      <div class="d-flex ms-lg-auto col-lg-5 col-12">
        <input type="submit" class="form-control submit-btn" value="Send" />
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
.form-control {
  min-height: 3em;
  margin: 15px auto;

  font-size: 1rem !important;
  font-weight: bold !important;
  line-height: 1.5 !important;

  color: var(--bs-body-color) !important;
  background: transparent !important;
  background-color: transparent !important;

  border-radius: 3px !important;
}

.form-control:hover,
.form-control:focus {
  border-color: var(--bs-yellow) !important;
  box-shadow: none !important;
}

.submit-btn {
  background: var(--bs-yellow) !important;
  border-radius: 30px !important;
  color: var(--bs-light) !important;
  font-weight: bold !important;
  border: none !important;
  transition: all 0.4s ease !important;
}
.submit-btn:hover {
  background: var(--bs-gray-700) !important;
}
</style>