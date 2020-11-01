<template>
<div class="resultWrapper">
  <div class="numbers">
    <div class="number" v-for="item in numbers" :key="item.number">
      <h2 class="lead">Database Entry: {{item.number}}</h2>
      <div class="info">
        <p class="text-default">Status : {{item.primality}}</p>
        <p class="text-default">Factorization : {{item.factorization}}</p>
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
