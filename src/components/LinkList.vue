<template>
    <ul>
      <li v-for="(link, name) in links">
        <a v-if="link.startsWith('http')" v-bind:href="link">{{name}}</a>
        <router-link v-else :to="link">{{name}}</router-link>
      </li>
    </ul>
</template>

<script>
  export default {
    name: "link-list",
    data () {
      return {
        links: {
          "Discord Server": "http://discord.neverendinggaf.com/",
          "Steam Group": "http://steam.neverendinggaf.com/",
          "Public Steam Group": "http://steamcommunity.com/groups/publicgaf",
          "GTA V Crew": "https://socialclub.rockstargames.com/crew/the_never_ending_gaf",
          "Arma 3 Squad Information": "arma",
          "Teamspeak Server": "ts3server://ts.neverendinggaf.com",
        }
      }
    },
    methods: {
      getLink: function (name) {
        let link = this.links[name];
        if ( link.startsWith('http') ) {
          return Vue.compile(`<a v-bind:href="link">{{name}}</a>`)
        } else {
          return Vue.compile(`<router-link to="${name}"></router-link>`)
        }
      }
    }
  }
</script>

<style scoped>

</style>
