<template>
  <nav class="navbar">
    <span class="navbar-logo">Test</span>

    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/admin">Admin</nuxt-link>
      </li>
      <li class="nav-item" v-if="isAuth">
        <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    computed: {
      isAuth() {
        return this.$store.getters.isAuth;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
  }
  .navbar-logo {
    color: #fff;
    text-transform: uppercase;
  }
  .navbar-nav {
    display: flex;
    list-style: none;
    height: 100%;
  }
  .nav-item a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    height: 100%;
    padding: 0 20px;
    border-bottom: 2px solid transparent;
  }
  .nav-item:hover {
    background-color: #444a50;
  }
  .nav-item a.active {
    color: #ffd04b;
    border-color:#ffd04b;
  }
</style>
