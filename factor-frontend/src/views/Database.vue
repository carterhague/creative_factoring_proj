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
      searchNumber: '',
      lookupNumber: '',
      displayResults: false,
      newlyAdded: false,
      alreadyExisted: false,
    }
  },
  computed: {
    numbers() {
      return this.$root.$data.numbers;
    }
  },
  methods: {
    probablyPrime: function(n, k) {
      if (n === 2 || n === 3)
        return true;
      if (n % 2 === 0 || n < 2)
        return false;

      // Write (n - 1) as 2^s * d
      var s = 0,
        d = n - 1;
      while (d % 2 === 0) {
        d /= 2;
        ++s;
      }

      WitnessLoop: do {
        // A base between 2 and n - 2
        var x = Math.pow(2 + Math.floor(Math.random() * (n - 3)), d) % n;

        if (x === 1 || x === n - 1)
          continue;

        for (var i = s - 1; i--;) {
          x = x * x % n;
          if (x === 1)
            return false;
          if (x === n - 1)
            continue WitnessLoop;
        }

        return false;
      } while (--k);

      return true;
    },
    isNumber: function() {
      if (isNaN(this.searchNumber)) {
        return false
      }
      return true
    },
    onSubmit: function() {
      this.newlyAdded = false
      this.alreadyExisted = false
      if (this.isNumber()) {
        this.lookupNumber = this.searchNumber;
        let temp = this.$root.$data.numbers.filter(number => number.id === Number(this.lookupNumber))
        if (temp.length < 1 || temp == undefined) {
          console.log("number not in database... adding it")
          this.newlyAdded = true
          let primality = this.probablyPrime(Number(this.lookupNumber), 8)
          console.log("prime:", primality)
          let factors = []
          if (primality) {
            factors.push(1)
            factors.push(Number(this.lookupNumber))
          } else {
            factors = "Unknown at the moment"
          }
          this.$root.$data.numbers.push({
            "id": Number(this.lookupNumber),
            "prime": primality,
            "factors": factors
          })
        }
        this.alreadyExisted = !(this.newlyAdded)
        this.displayResults = true;
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
