<template>
<div class="position-relative">
  <!-- shape Hero -->
  <section class="section-shaped my-0 fullscreen">
    <div class="shape shape-style-1 bg-gradient-primary">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container shape-container">
      <div id="searchResults" class="mediumwidth">
        <NumberDetails :numbers="numbers" />
      </div>
      <br>
    </div>
  </section>
</div>
</template>

<script>
import NumberDetails from "../components/NumberDetails.vue"
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  computed: {
    numbers() {
      return this.$root.$data.numbers;
    }
  },
  components: {
    NumberDetails
  }
};
</script>

<style scoped>
#factorSearchBar {
  margin-top: 10%;
}

.mediumwidth {
  margin: auto;
  width: 66%;
}

.fullscreen {
  width: 100%;
  height: 100%;
}
</style>
