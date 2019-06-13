<template>
  <form class="pay-form" @submit.prevent="onSubmit">
    <label>
      <span class="pay-form__label">Номер карты</span>
      <input v-model="formData.cardNumber" type="text" class="form-control" placeholder="Номер карты">
    </label>
    <label>
      <span class="pay-form__label">Номер телефона</span>
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
    },
    transaction: {
      date: '',
      product: '',
      phone: '',
      amount: '',
      status: true
    }
  }),
  computed: {
    cart() {
      return this.$store.getters['goods/cart'];
    }
  },
  methods: {
    onSubmit() {
      if (checkCard(this.formData.cardNumber)) {
        console.log('Cart valid');
        console.log(this.$store.getters['goods/cart']);
        const cart = this.$store.getters['goods/cart'];
        this.transaction.date = new Date;
        this.transaction.product = cart.productName;
        this.transaction.phone = this.formData.phoneNumber;
        this.transaction.amount = cart.productPrice;
        console.log(this.transaction);
      }
    }
  }
}
</script>

<style scoped>
  .pay-form {
    margin-top: 40px;
  }
</style>
