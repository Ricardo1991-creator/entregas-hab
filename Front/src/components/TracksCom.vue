<template>
  <div>
    <h1>TOP TRACKS</h1>

    <input id="buscador" type="search" v-model="search" placeholder="Busaca tu cancion favorita" />

    <section>
      <ul v-for="track in filtered" :key="track.id">
        <li>
          <p>CANCIÓN:{{track.name}}</p>
          <p>REPRODUCCIONES:{{track.listeners}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "TracksCom",
  props: {
    toptracks: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptracks;
      }
      return this.toptracks.filter(track =>
        track.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>