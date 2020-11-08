<template>
<div class="resultWrapper">
  <div class="numbers" v-if="displayStatus">
    <div class="number" v-for="item in numbers" :key="item.number">
      <div class="title">
        <h2 class="lead">Database Entry: {{item.number}}</h2>
      </div>
      <div class="info">
        <p class="text-default">Current Status : {{item.primality}}</p>
        <p class="text-default">Modified Status :
          <input type="text" v-model="activeEntry.primality" placeholder="Factorization"><br>
        </p>
        <p class="text-default">Current Factorization : {{item.factorization}}</p>
        <p class="text-default">Modified Factorization :
          <input type="text" v-model="activeEntry.factorization" placeholder="Factorization"><br><br>
        </p>
      </div>
      <div class="buttons">
        <base-button v-on:click="onUpdate" type="warning" icon="ni ni-bold-up">Update</base-button>
        <base-button v-on:click="onDelete" type="danger" icon="ni ni-fat-remove">Delete</base-button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MaintenenceDetails',
  props: {
    numbers: Array,
    displayStatus: Boolean,
  },
  data() {
    return {
      activeEntry: this.$props.numbers[0],
    }
  },
  methods: {
    async onUpdate() {
      this.activeEntry.number = this.numbers[0].number
      this.activeEntry._id = this.numbers[0]._id // fixes a werid bug when not entering but switching numbers
      await this.editItem(this.activeEntry)
      this.$emit('update:displayStatus', false) // because prop is synced just emit change
    },
    async onDelete() {
      this.activeEntry.number = this.numbers[0].number
      this.activeEntry._id = this.numbers[0]._id // fixes a werid bug when not entering but switching numbers
      await this.deleteItem(this.activeEntry)
      this.$emit('update:displayStatus', false) // because prop is synced just emit change
    },
    async editItem(item) {
      try {
        await axios.put("/api/numbers/" + item._id, {
          primality: item.primality,
          factorization: item.factorization,
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/numbers/" + item._id);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
.title {
  overflow-wrap: break-word;
}

.buttons {
  display: wrap;
  justify-content: space-between;
}

.info {
  overflow-wrap: break-word;
  justify-content: space-between;
  text-overflow: ellipsis;
}

.number {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 1px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
}
</style>
