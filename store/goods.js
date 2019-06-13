export const state = () => ({
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
  ]
})

export const mutations = {
  selectProduct(state, id) {
    const currentGoods = state.goods;
    currentGoods.map(item => item.productSelected = false);
    const currentProduct = currentGoods.filter(item => item.productId == id)[0];
    currentProduct.productSelected = !currentProduct.productSelected;
    state.cart = currentProduct;
  },
  clearSelect() {
    currentGoods.map(item => item.productSelected = false);
  }
}

export const getters = {
  goods: s => s.goods,
  cart: s => s.cart
}