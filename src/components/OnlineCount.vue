<template>
    <span class="badge badge-secondary">{{count}}</span>
</template>

<script>
  let update = true;
  export default {
    name: "online-count",
    data () {
      return {
        count: 0
      }
    },
    methods: {
      setOnlineCount: function () {
        const url = 'https://canary.discordapp.com/api/guilds/172425299559055381/widget.json';
        fetch(url)
          .then(res => res.json())
          .then((out) => {
            this.count = out["members"].length;

            if (update) {
              setTimeout(() => {
                this.setOnlineCount()
              }, 5000)
            }
          })
      }
    },
    beforeMount () {
      this.setOnlineCount()
    },
    beforeDestroy () {
      update = false;
    }
  }
</script>

<style scoped>

</style>
