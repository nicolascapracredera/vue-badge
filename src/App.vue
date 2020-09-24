<template>
  <div id="app">
    <p>Hello app!</p>
    <p>
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
    </p>
    <router-view></router-view>
    <a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
