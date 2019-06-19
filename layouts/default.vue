<template>
  <el-container>
    <el-header>
      <Navbar />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
  import Navbar from '@/components/Navbar';

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
.el-header {
  background-color:#545c64;
}
.el-main {
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>
