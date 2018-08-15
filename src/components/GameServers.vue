<template>
  <ul>
    <li v-for="server in servers">
      <p>{{server.name}} -  <span class="badge badge-secondary">{{server.ip}}</span></p>
    </li>
  </ul>

</template>

<script>
  import servers from '../assets/servers'

  export default {
    name: "game-servers",
    data () {
      return {
        servers: servers
      }
    }
  }
</script>
