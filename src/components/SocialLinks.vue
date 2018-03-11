<template>
    <ul>
      <li v-for="(person, name) in members">
        {{name}}<span v-for="(socialLink, socialName) in person.social"> - <a v-bind:href="socialLink" v-bind:style="getSocialColour(socialName)">{{socialName}}</a></span>
      </li>
    </ul>
</template>

<script>
  import members from "../assets/members"
  let update = true;

  export default {
    name: "social-links",
    data () {
      return {
        youtube: 'color: #FF0000',
        twitch: 'color: #6441A4',
        twitter: 'color: #00aced',
        steam: 'color: #000000',
        members: members
      }
    },
    methods: {
      getSocialColour: function (socialColor) {
        return this[socialColor]
      }
    }
  }
</script>

<style scoped>

</style>
