<template>
  <form @submit.prevent="onSubmit">
    <h1>Login</h1>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" class="form-control">
    </div>
    <div class="form-footer">
      <nuxt-link to="/">На главную</nuxt-link>
      <button class="btn btn-primary" type="submit">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'login',
  methods: {
    onSubmit() {
      this.$store.dispatch('login');
      this.$router.push('/admin');
    }
  }
}
</script>


<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 100px auto 0;
  }
  .form-group {
    width: 100%;
  }
  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>

