<template>
  <div class="toptracks">
    <trackscom :toptracks="toptracks" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import trackscom from "@/components/TracksCom.vue";

export default {
  name: "TopTracks",
  components: {
    trackscom
  },
  data() {
    return {
      toptracks: []
    };
  },
  created() {
    api
      .getTopTracks()
      .then(response => (this.toptracks = response.data.tracks.track));
  }
};
</script>

<style scoped>
</style>