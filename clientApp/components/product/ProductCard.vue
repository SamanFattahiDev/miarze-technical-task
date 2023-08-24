<template>
  <div class="card lg:col-span-1 md:col-span-2 col-span-4 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title line-clamp-1">{{ item.title }}</h2>
      <div class="card-actions justify-start">
        <button class="btn bg-primary text-white hover:bg-primary " @click="addToCart">افزودن به سبد خرید</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    addToCart() {
      this.$utils.addToCart(this.item)
      // this.$utils.emptyCart()
    }
  }


}
</script>

<style scoped>

</style>
