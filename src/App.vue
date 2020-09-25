<template>
  <div id="app">
    <h1>Marvel Character Lookup</h1>
    <p id="navigation">
      <router-link class="nav-option" to="/">Home</router-link>
      <router-link class="nav-option" to="/search">Search for Characters</router-link>
    </p>
    <router-view></router-view>
    <div id="footer">
      <a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.nav-option {
  margin-right: 5px;
  background: green;
  padding: 3px;
  border-radius: 5%;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  font-size: large;
  font-weight: bold;
}

.nav-option:hover {
  background: darkgreen;
  color: white;
}

#footer {
  clear: both;
  margin-top: 40%;
}
</style>
