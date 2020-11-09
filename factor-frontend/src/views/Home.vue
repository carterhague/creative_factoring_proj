<template>
<div class="position-relative">
  <!-- shape Hero -->
  <section class="section-shaped my-0 fullscreen1">
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
      <div id="factorSearchBar" class="mediumwidth">
        <base-input :valid="isNumber()" v-model="searchNumber" v-on:keyup.enter="onSubmit" placeholder="Search for a number!"></base-input>
      </div>
      <div id="warningBoxes" class="mediumwidth">
        <base-alert v-if="!isNumber()" type="warning">
          <strong>Warning!</strong> Make sure your input is a number :)
        </base-alert>
        <base-alert v-if="this.newlyAdded" type="info" dismissible>
          <span class="alert-inner--icon"><i class="ni ni-satisfied"></i></span>
          <span class="alert-inner--text"><strong>Info!</strong> We just added this number to the database... you may have to check back later.</span>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </base-alert>
        <base-alert v-if="this.alreadyExisted" type="success" dismissible>
          <span class="alert-inner--icon"><i class="ni ni-check-bold"></i></span>
          <span class="alert-inner--text"><strong>Yay!</strong> We found your number in the database!</span>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </base-alert>
      </div>
      <div v-if="this.displayResults" id="searchResults" class="mediumwidth">
        <NumberDetails :numbers="searchResults" />
      </div>
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
      searchNumber: '',
      lookupNumber: '', // change to lookupId - mongodb entry id
      displayResults: false,
      newlyAdded: false,
      alreadyExisted: false,
      numbers: [],
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    searchResults() {
      if (this.lookupNumber !== "") {
        // api get request for lookup number
        let result = this.numbers.filter(item => item.number === this.lookupNumber);
        let dummy = []
        dummy.push(result[0])
        return dummy
      }
    }
  },
  methods: {
    delay(ms) {
      return new Promise(res => setTimeout(res, ms))
    },
    isNumber: function() {
      if (isNaN(this.searchNumber)) {
        return false
      }
      return true
    },
    async onSubmit() {
      if (this.searchNumber !== "") {
        this.newlyAdded = false
        this.alreadyExisted = false
        if (this.isNumber()) {
          let results = this.numbers.filter(item => item.number === this.searchNumber)
          if (results.length < 1 || results == undefined) {
            //console.log("number not in database... adding it")
            this.newlyAdded = true
            this.postItem(this.searchNumber)
            this.numbers.push({
              "number": this.searchNumber
            })
          }
          this.alreadyExisted = !(this.newlyAdded)
          this.displayResults = true;
        } else {
          this.displayResults = false;
        }
      }
      this.lookupNumber = this.searchNumber;
      this.getItems()
      await this.delay(3000); // call again 3 seconds later to get update if it exists
      this.getItems()
    },
    async getItems() {
      try {
        let response = await axios.get("/api/numbers");
        this.numbers = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async postItem(newNumber) {
      try {
        await axios.post('/api/numbers', {
          number: newNumber
        });
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

<style>
#factorSearchBar {
  margin-top: 10%;
}

.mediumwidth {
  margin: auto;
  width: 66%;
}

.fullscreen1 {
  width: 100%;
  min-height: 100vh;
}
</style>
