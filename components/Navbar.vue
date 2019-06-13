<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Test</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
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
      </div>
    </nav>
  </header>
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
