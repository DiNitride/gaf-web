<template>
  <table id="members" class="table">
    <tbody>
      <tr v-for="(memberData, name) in members">
        <td>
          <a v-bind:href="memberData.social.steam">{{name}}</a>
        </td>
        <td>{{memberData.tagline}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import members from '../assets/members'

  export default {
    name: "member-list",
    data () {
      return {
        members: members
      }
    }
  }
</script>

<style scoped>

</style>
