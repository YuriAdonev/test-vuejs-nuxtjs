<template>
  <div class="goods">
    <ul class="goods__list row">
      <li v-for="item of goods" :class="{goods__item_selected: item.productSelected}" :key="item.productId" class="goods__item col-md-2">
        <p class="goods__name">{{ item.productName }}</p>
        <span class="goods__price">{{ item.productPrice }} руб.</span>
        <button @click.prevent="addToCart(item)" type="button" class="btn btn-secondary">Выбрать</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    goods: [
      {
        productId: "1",
        productName: "Товар 1",
        productPrice: 345,
        productSelected: false
      },
      {
        productId: "2",
        productName: "Товар 2",
        productPrice: 758,
        productSelected: false
      },
      {
        productId: "3",
        productName: "Товар 3",
        productPrice: 832,
        productSelected: false
      },
      {
        productId: "4",
        productName: "Товар 4",
        productPrice: 1245,
        productSelected: false
      },
      {
        productId: "5",
        productName: "Товар 5",
        productPrice: 1643,
        productSelected: false
      }
    ],
    cart: {}
  }),
  methods: {
    addToCart(currentProduct) {
      if (!currentProduct.productSelected) {
        this.goods.map(item => item.productSelected = false);
        this.cart = currentProduct;
      } else {
        this.cart = {};
      }
      currentProduct.productSelected = !currentProduct.productSelected;
    }
  }
}
</script>

<style>
.goods__list {
  margin: 0;
  padding: 0;

  list-style: none;
}
.goods__item {
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid lightgrey;
}
.goods__item_selected {
  border-color: blue;
}
.goods__price {
  display: block;
  margin-bottom: 10px;
}
</style>
