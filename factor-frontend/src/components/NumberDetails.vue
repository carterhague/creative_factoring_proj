<template>
<div class="resultWrapper">
  <div class="numbers">
    <div class="number" v-for="number in numbers" :key="number.id">
      <h2 class="lead">Database Entry: {{number.id}}</h2>
      <div class="info">
        <p class="text-default">Prime : {{number.prime}}</p>
        <p class="text-default">Factors : {{number.factors}}</p>
      </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'NumberDetails',
  props: {
    numbers: Array
  }
}
</script>

<style>
.info {
  display:flex;
  justify-content: space-between;
}

.number {
  padding-left:10px;
  padding-right:10px;
  padding-top:1px;
  background-color: white;
  border-radius:10px;
  margin: 10px;
}
</style>
