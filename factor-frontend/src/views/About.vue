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
      <div class="text-white">
        <h1 class="text-white">About</h1>
        <p class="lead">Fact: FactorDB is a popular online website that has numbers and their factors.</p>
        <p class="lead">Problem: it is not pretty.</p>
        <p class="lead">Solution: this website.</p>
        <p class="lead">While I'm not yet a master web-developer, I do think it is fun to play around
         and hopefully learn new things. This site currently uses mock data :(. In the future I'll add
         an express back-end that interfaces with MongoDB and a python script to factor the (non-prime)
         numbers as they come in. Then this site will function almost equivalently to FactorDB. For now,
         this site just uses Vue CLI and some classic javascript/html/css to get the job done.</p>
      </div>
    </div>
  </section>
</div>
</template>

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
  height: 100vh;
}
</style>
