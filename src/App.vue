<template>
  <div id="app">
    <div id="page">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Marvel Character Lookup</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li :class="'nav-item ' + [currentPage === '/' && 'active']">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li :class="'nav-item ' + [currentPage === '/search' && 'active']">
              <router-link class="nav-link" to="/search">Search for Characters</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
    <div id="footer">
          <a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>
      </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App',
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
}
</script>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

#content {
  margin-left: 5px;
}

#page {
  position: relative;
  min-height: 100vh;
}
</style>
