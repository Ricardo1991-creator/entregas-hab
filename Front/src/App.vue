<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/toptracks">Top Tracks</router-link>|
      <router-link to="/topartists">Top Artists</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2f5f8;
  background: rgb(46, 42, 42);
}

#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #e6ecf3;
}

#nav a.router-link-exact-active {
  color: #47faaa;
}
</style>
