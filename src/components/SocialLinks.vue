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
        Youtube: 'color: #FF0000',
        Twitch: 'color: #6441A4',
        Twitter: 'color: #00aced',
        Steam: 'color: #000000',
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
