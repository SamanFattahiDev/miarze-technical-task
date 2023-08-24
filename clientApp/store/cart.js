export const state = () => ({
  cart: [],
});

export const getters = {
  cartCount(state) {
    return state.cart.length
  },
  getCartData(state) {
    return state.cart
  }
}
export const mutations = {
  emptyCart(state, payload) {
    state.cart = []

  },
  setItemQuantity(state, payload) {
    let idx = state.cart.findIndex(e => e.id === payload.productId)

    if (payload.type === 1) {
      state.cart[idx].quantity++
    } else if (payload.type === 2) {
      if (state.cart[idx].quantity > 1) {
        state.cart[idx].quantity--
      }

    }
  },
  addToCart(state, payload) {
    let idx = state.cart.findIndex(e => e.id === payload.id)
    if (idx > -1) {
      state.cart[idx].quantity++
      this.$toast.success('تعداد کالا افزایش یافت')
    } else {
      payload['quantity'] = 1
      state.cart.push(payload)
      this.$toast.success('کالا به سبد خرید افزوده شد')
    }
  },
  deleteItem(state, payload) {
    let idx = state.cart.findIndex(e => e.id === payload)
    state.cart.splice(idx, 1)
  }

};
