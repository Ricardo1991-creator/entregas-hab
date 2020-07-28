<template>
  <div>
    <h1>TOP ARTISTS</h1>

    <input id="buscador" type="search" v-model="search" placeholder="Busca tu artista favorito" />

    <section>
      <ul v-for="artist in filtered" :key="artist.id">
        <img :src="artist.image[2]['#text']" />
        <li>
          <p>ARTISTA:{{artist.name}}</p>
          <p>OYENTES: {{artist.listeners}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "ArtistsCom",
  props: {
    topartists: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.topartists;
      }
      return this.topartists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 150px;
  border: 3px solid #47faaa;
}
</style>