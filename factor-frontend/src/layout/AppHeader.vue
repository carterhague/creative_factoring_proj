<template>
<header class="header-global">
  <base-nav class="navbar-main" transparent type="" expand>
    <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
      <p class="lead">Factor</p>
    </router-link>
    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
      <li class="nav-item">
        <router-link to="/database">
          <p class="lead mt-3 text-default">Database</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">
          <p class="lead mt-3 text-default">About</p>
        </router-link>
      </li>
    </ul>
  </base-nav>
</header>
</template>

<script>
import BaseNav from "@/components/BaseNav";

export default {
  components: {
    BaseNav
  }
};
</script>

<style>
</style>
