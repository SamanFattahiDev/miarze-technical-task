import {Inject} from "@nuxt/types/app";

// @ts-ignore
export default ({app, store}, inject:Inject) => {
  inject("utils", {
    addToCart(product = Object) {
      store.commit("cart/addToCart", product);
    },
    emptyCart() {
      store.commit("cart/emptyCart");
    },
    setItemQuantity(productId = Number, type = Number) {
      store.commit("cart/setItemQuantity", {productId: productId, type: type});
    },
    deleteItem(productId = Number) {
      store.commit("cart/deleteItem", productId);

    }

  });
};
