<template>
<footer class="footer has-cards">
  <div class="container">
    <div class="row align-items-center justify-content-md-between">
      <div class="col-md-6">
        <p>Made by Carter Hague for CS260</p>
      </div>
      <div class="col-md-6">
        <ul class="nav nav-footer justify-content-end">
          <li class="nav-item">
            <a href="https://github.com/carterhague/creative_factoring_proj" class="nav-link" target="_blank" rel="noopener">GitHub Link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
