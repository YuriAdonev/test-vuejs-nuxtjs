<template>
  <form class="pay-form" @submit.prevent="onSubmit">
    <label>
      <span class="pay-form__label">Номер карты:</span>
      <input v-model="formData.cardNumber" type="text" class="form-control" placeholder="Номер карты">
    </label>
    <label>
      <span class="pay-form__label">Номер телефона:</span>
      <input v-model="formData.phoneNumber" type="text" class="form-control" placeholder="Номер телефона">
    </label>
    <button type="submit" class="btn btn-primary">Оплатить</button>
  </form>
</template>

<script>
  const checkCard = (function(arr) {
    return function(ccNum) {
      let len = ccNum.length;
      let bit = 1;
      let sum = 0;
      let val;

      while (len) {
        val = parseInt(ccNum.charAt(--len), 10);
        sum += (bit ^= 1) ? arr[val] : val;
      }

      return sum && sum % 10 === 0;
    };
  }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

  export default {
    data: () => ({
      formData: {
        cardNumber: '',
        phoneNumber: ''
      }
    }),
    computed: {
      cart() {
        return this.$store.getters['goods/cart'];
      }
    },
    methods: {
      async onSubmit() {
        if (checkCard(this.formData.cardNumber)) {
          const cart = this.$store.getters['goods/cart'];
          const transactionData = {
            product: cart.productName,
            phone: this.formData.phoneNumber,
            amount: cart.productPrice
          };
          try {
            await this.$store.dispatch('transactions/createTransaction', transactionData);
            this.formData.cardNumber = '';
            this.formData.phoneNumber = '';
            this.$message({
              message: 'Списано с карты ' + transactionData.amount + ' руб',
              type: 'success'
            });
          } catch (e) {}
        }
      }
    }
  }
</script>

<style scoped>
  .pay-form {
    display: flex;
    align-items: flex-end;
    margin-top: 40px;
  }
  .pay-form label {
    display: block;
    margin-right: 20px;
  }
  .pay-form__label {
    font-size: 12px;
  }
  .form-control {
    width: 200px;
    font-size: 14px;
  }
</style>
