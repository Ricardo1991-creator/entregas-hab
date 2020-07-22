<template>
  <div class="topartists">
    <artistscom :topartists="topartists" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import artistscom from "@/components/ArtistsCom.vue";

export default {
  name: "TopArtists",
  components: {
    artistscom
  },
  data() {
    return {
      topartists: []
    };
  },
  created() {
    api
      .getArtists()
      .then(response => (this.topartists = response.data.topartists.artist));
  }
};
</script>

<style scoped>
</style>