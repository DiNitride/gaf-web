<template>
  <div class="row">
    <div class="col-8 offset-2 text-left">
      <router-link to="home"><fa-icon :icon="['fa', 'arrow-left']"></fa-icon> Back</router-link>
      <h2 class="text-center">
        Archive
      </h2>
      <p>
        <strong>Images</strong>
      </p>
      <p>
        Logos
      </p>
      <ul>
        <li><a href="../assets/Images/logos/gaf-logo.jpg">GAF Icon</a><br></li>
        <li><a href="../assets/Images/logos/gaf-logo-community.jpg">GAF Community Icon</a></li>
        <li><a href="../assets/Images/logos/gaf-logo-family.jpg">GAF Family Icon</a></li>
        <li><a href="../assets/Images/logos/gaf-logo-transparent.png">GAF Icon Transparent BG</a></li>
        <li><a href="../assets/Images/logos/gaf-logo-transparent-ring.png">GAF Icon Transparent BG W ring</a></li>
      </ul>
      <p>
        Flags
      </p>
      <ul>
        <li><a href="../assets/Images/flags/gaf-flag.jpg">GAF Flag</a><br></li>
        <li><a href="../assets/Images/flags/gaf-flag-community.jpg">GAF Community Flag</a></li>
        <li><a href="../assets/Images/flags/gaf-flag-family.jpg">GAF Family Flag</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Archive"
  }
</script>

<style scoped>

</style>
