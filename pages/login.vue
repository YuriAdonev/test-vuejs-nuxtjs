<template>
  <el-form @submit.native.prevent="submitForm" :model="controls" :rules="rules" ref="form" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input v-model.trim="controls.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <nuxt-link to="/">На главную</nuxt-link>
      <button type="submit">Войти</button>
    </el-form-item>
  </el-form>

</template>

<script>
  export default {
    layout: 'login',
    data() {
      return {
        controls: {
          login: '',
          password: ''
        },
        rules: {
          login: [
            { required: true, message: 'Введите имя', trigger: 'blur' },
            { min: 3, message: 'Минимум 3 символа', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Введите пароль', trigger: 'blur' },
            { min: 4, message: 'Минимум 4 символов', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true;
            try {
              const formData = {
                login: this.controls.login,
                password: this.controls.password
              }
              await this.$store.dispatch('login', formData);
              this.$router.push('/admin');
            } catch (e) {
              this.loading = false;
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
  .el-input__inner {
    width: 200px;
    font-size: 14px;
  }
  .el-form-item::after, .el-form-item::before {
    display: none;
  }
  .el-form-item__content a {
    margin-right: 20px;
  }
  .el-form-item__content::after, .el-form-item__content::before {
    display: none;
  }
</style>

