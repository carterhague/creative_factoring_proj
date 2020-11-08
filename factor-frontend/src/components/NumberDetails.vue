<template>
<div class="resultWrapper">
  <div class="numbers">
    <div class="number" v-for="item in numbers" :key="item.number">
      <div class="title">
        <h2 class="lead">Database Entry: {{item.number}}</h2>
      </div>
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
.title {
  overflow-wrap: break-word;
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
