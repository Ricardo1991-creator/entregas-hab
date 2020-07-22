<template>
  <div>
    <h1>TOP TAGS</h1>
    <input id="buscador" type="search" v-model="search" placeholder="Busca tu género favorito" />
    <section>
      <ul v-for="tag in filtered" :key="tag.id">
        <li>
          <p class="caja">{{tag.name}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "TagsCom",
  props: {
    toptags: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptags;
      }
      return this.toptags.filter(tag =>
        tag.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>