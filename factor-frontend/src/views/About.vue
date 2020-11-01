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
          and hopefully learn new things. Depending on the current time, this site may or may not be using mock data
          . Eventually this site will use an express back-end that interfaces with MongoDB and a SageMath script to factor the
          numbers as they come in. This site will then function almost equivalently to FactorDB. The Database page shows current DB entries,
          while the Factor homepage allows you to make a query. The Maintenece page will allow admin users to manually update/remove entries.</p>
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
