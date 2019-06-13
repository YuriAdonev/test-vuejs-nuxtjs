<template>
  <div class="goods">
    <ul class="goods__list row">
      <li v-for="item of goods" :class="{goods__item_selected: item.productSelected}" :key="item.productId" class="goods__item col-md-2">
        <p class="goods__name">{{ item.productName }}</p>
        <span class="goods__price">{{ item.productPrice }} руб.</span>
        <button @click.prevent="selectItem(item)" type="button" class="btn btn-secondary">Выбрать</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    goods() {
      return this.$store.getters['goods/goods'];
    }
  },
  methods: {
    selectItem(currentProduct) {
      this.$store.commit('goods/selectProduct', currentProduct.productId);
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
