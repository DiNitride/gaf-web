<template>
  <table class="table table-condensed">
    <thead>
    <tr>
      <th>Name</th>
      <th>Channel</th>
      <th>Start Time</th>
      <th>End Time</th>
    </tr>
    </thead>
    <tbody>
      <tr v-if="events.length <= 0">
        <td colspan="4"><h3 class="text-center">No upcomming events</h3></td>
      </tr>
      <tr v-else v-for="event in events">
        <td>
          {{event.name}}
        </td>
        <td>
          {{event.channel}}
        </td>
        <td>
          {{event.startTime}}
        </td>
        <td>
          {{event.endTime}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  let update = true;

  export default {
    name: "upcomming-events",
    data () {
      return {
        events: []
      }
    },
    methods: {
      loadEvents: function () {
        const url = "http://www.neverendinggaf.com/api/v1/calendar/events";
        fetch(url)
          .then(res => res.json())
          .then((out) => {
            this.events = out["events"];
          });

        if ( update ) {
          setTimeout(() => {
            this.loadEvents()
          }, 300000)
        }
      }
    },
    beforeMount () {
      this.loadEvents()
    },
    beforeDestroy() {
      update= false
    }
  }
</script>

<style scoped>

</style>
