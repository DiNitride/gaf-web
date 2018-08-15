<template>
  <div id="app">
    <header class="jumbotron">
      <router-link to="home">
        <img src="./assets/images/logos/gaf-logo-transparent-ring.png" alt="GAF Logo" width="150" height="150">
      </router-link>
      <h1 class="text-center">The Never Ending GAF</h1>
    </header>
    <div class="row">
      <menu class="col-6 offset-3">
        <div class="btn-group d-flex" role="group" aria-label="Menu">
          <a href="http://discord.neverendinggaf.com" class="btn btn-secondary w-100">Discord</a>
          <a href="http://steamcommunity.com/groups/TheNeverEndingGAF" class="btn btn-secondary w-100">Steam</a>
          <a href="http://steamcommunity.com/groups/publicgaf" class="btn btn-secondary w-100">Public Steam</a>
          <a href="ts3server://ts.neverendinggaf.com" class="btn btn-secondary w-100">Teamspeak</a>
        </div>
      </menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
