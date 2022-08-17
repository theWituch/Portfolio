<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div class="col-lg-6 col-12">
        <input id="name" type="text" name="name" placeholder="Your Name" class="form-control" />
      </div>

      <div class="col-lg-6 col-12">
        <input id="email" type="email" name="email" placeholder="Email" class="form-control" />
      </div>

      <div class="col-12">
        <textarea id="message" name="message" rows="6" placeholder="Message" class="form-control"></textarea>
      </div>

      <div class="form-buttons ml-lg-auto col-lg-4 col-12">
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
  width: 100%;
  min-height: 3em;
  margin: 16px auto;
  padding: 0.4em 0.75em;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;

  color: var(--accent);
  background: transparent;

  outline: none;
  border: 1px solid var(--accent);
  border-radius: 3px;

  transition: all 0.15s ease-in-out;
}

.form-control:hover,
.form-control:focus {
  border-color: var(--yellow);
}

.form-buttons {
  display: inline-flex;
  margin-left: auto !important;
}

.submit-btn {
  background: #ffc200;
  border-radius: 50px;
  color: #ffffff;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}
</style>