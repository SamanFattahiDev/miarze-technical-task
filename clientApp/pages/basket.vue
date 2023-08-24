<template>
  <div class="w-full 2xl:w-9/12 mx-auto p-3">
    <div class="grid grid-cols-1 gap-2 my-2">
      <button v-if="getCartData.length>0" class="btn hover:bg-primary bg-primary text-white" type="button"
              @click="emptyBasket">حذف همه
      </button>
      <LazyBasketItem v-for="(item,idx) in getCartData" :item="item"></LazyBasketItem>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "basket",
  computed: {
    ...mapGetters('cart', ['getCartData'])
  },

  methods: {
    emptyBasket() {
      this.$utils.emptyCart()
    }
  }
}
</script>

<style scoped>

</style>
