<template>
  <el-container>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
  export default {
    computed: {
      error() {
        return this.$store.getters.error
      }
    },
    watch: {
      error(value) {
        this.$message.error(value.responce.data.message);
      }
    }
  }
</script>