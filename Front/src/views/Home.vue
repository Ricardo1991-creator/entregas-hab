<template>
  <div class="home">
    <tagscom :toptags="toptags" />
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api/index.js";
import tagscom from "@/components/TagsCom.vue";

export default {
  name: "Home",
  components: {
    tagscom
  },
  data() {
    return {
      toptags: []
    };
  },
  created() {
    api.getTopTags().then(response => (this.toptags = response.data.tags.tag));
  }
};
</script>

<style scoped>
</style>