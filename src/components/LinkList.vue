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
          "Current list of Steam Keys we have in our pool for giveaways or competition prizes": "https://docs.google.com/spreadsheets/d/1PM_rfIb-ule9PTVjEhCSukG5zZZqgwzIFLkYEsXmmAw/edit?usp=sharing",
          "GTA V Crew": "https://socialclub.rockstargames.com/crew/the_never_ending_gaf",
          "Destiny 2 Clan": "https://www.bungie.net/en/ClanV2/Chat?groupId=2118940",
          "Arma 3 Squad Information": "arma",
          "Teamspeak Server": "ts3server://ts.neverendinggaf.com",
          "Good Discord Etiquette": "http://www.neverendinggaf.com/discord_etiquette.html",
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
