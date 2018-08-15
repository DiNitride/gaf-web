<template>
  <div class="row">
    <div class="col-8 offset-2 text-left">
      <p>
        <strong>Idiots online: </strong> <online-count></online-count>
        <br>
        <strong>Idiots in voice: </strong> <voice-count></voice-count>
      </p>
      <p>
        The Never Ending GAF is a small group of idiots that play games and insult each other. We reside on our Discord server, usually in the beloved cesspool intelligently titled "Channel 1". Feel free to pop by, probably get told to piss off, and maybe play some games.
      </p>
      <h2 data-toggle="tooltip" data-placement="left" title="" data-original-title="no, fuck off">
        Can I join GAF?
      </h2>
      <p>
        Short answer: <strong>No</strong>
        <br>
        Long answer: <strong>No, Fuck off</strong>
      </p>
      <p>
        GAF is not recruiting in the sense that you can apply and join, we don't do that. We're not an organised clan or group of any sorts, membership is based simply on <strike>how much you please the emperor</strike> who we feel like. If you want to come and hang out with us, join the Discord server. Everyone who's ever been in GAF started there and that's how it will always be done.
      </p>
      <h2>
        Links
      </h2>
      <link-list></link-list>
      <h2>
        Social Media
      </h2>
      <social-links></social-links>
      <h2>
        Game Servers
      </h2>
      <game-servers></game-servers>
      <h2>
        Upcomming Events
      </h2>
      <upcomming-events></upcomming-events>
      <h2>
        The idiots of the group
      </h2>
      <member-list></member-list>
    </div>
  </div>
</template>

<script>
  import OnlineCount from "@/components/OnlineCount";
  import VoiceCount from "@/components/VoiceCount";
  import LinkList from "../components/LinkList";
  import SocialLinks from "../components/SocialLinks";
  import UpcommingEvents from "../components/UpcommingEvents";
  import MemberList from "../components/memberList";
  import GameServers from "../components/GameServers";

  export default {
    components: {
      MemberList,
      UpcommingEvents,
      SocialLinks,
      LinkList,
      VoiceCount,
      OnlineCount,
      GameServers},
    name: "Home",
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
