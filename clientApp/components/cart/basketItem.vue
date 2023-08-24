<template>
  <div class="flex items-center shadow p-3 rounded-xl my-2 justify-between p-0">
    <div class="flex flex-col gap-2 items-start">
      <span class="line-clamp-1 text-right">{{ item.title }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex   w-full items-center p-1 gap-2 shadow rounded-xl">
        <div  v-if="item.quantity>1" @click="setItemQuantity(2)">
          <LazyMinusIcon class="w-4 h-4 fill-gray-500 hover:fill-primary"></LazyMinusIcon>
        </div>
        <div v-else @click="deleteItem">
          <LazyTrashIcon class="w-4 h-4 fill-gray-500 hover:fill-primary"></LazyTrashIcon>
        </div>
        <small>{{ item.quantity }}</small>
        <div @click="setItemQuantity(1)">
          <LazyAddIcon class="w-4 h-4 fill-gray-500 hover:fill-primary"></LazyAddIcon>
        </div>
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
    deleteItem(){
      this.$utils.deleteItem(this.item.id)

    },
    setItemQuantity(type) {
      //type 1 = increase
      //type 2= decrease
      this.$utils.setItemQuantity(this.item.id, type)
      // this.$utils.emptyCart()
    }
  }


}
</script>

<style scoped>

</style>
