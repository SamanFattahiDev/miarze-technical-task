<template>
  <div class="w-full 2xl:w-9/12 mx-auto p-3">
    <div class="grid grid-cols-4  gap-2 my-2">
      <LazyProductCard v-for="(item,idx) in products" :item="item"></LazyProductCard>
      <div class="col-span-4">
        <LazyPagination
          :totalCount="10"
          :perPage="1"
          :activePage="1"
          @PageChanged="changePage"
        ></LazyPagination>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.getAllProducts()
  },
  fetchOnServer:false,
  data(){
    return{
      products:null
    }
  },
  methods: {
    async changePage(){

    },
    async getAllProducts() {
      try {
        const res = await this.$api.getAllProducts.setTag()
        res.data.forEach((item,idx)=>{
          item['id'] = idx
        })
        this.products = res.data
      } catch (e) {

      } finally {

      }
    }
  }
}
</script>


