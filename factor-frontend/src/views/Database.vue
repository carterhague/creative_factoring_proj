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
        <NumberDetails :numbers="searchResults" />
      </div>
      <br>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
import NumberDetails from "../components/NumberDetails.vue"
export default {
  name: 'Home',
  data() {
    return {
      numbers: []
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    searchResults() {
      return this.numbers;
    }
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/numbers");
        this.numbers = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
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
