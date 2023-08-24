<template>

  <nav
    class="w-full  flex items-center justify-between px-8 sticky top-2 2xl:w-9/12 mx-auto h-16 shadow bg-transparent  backdrop-blur-3xl z-[999] rounded-3xl">

    <div class="flex gap-4 h-full items-center    ">
      <nuxt-link class="cursor-pointer"
                 exact-active-class="activeClass"
                 to="/"
      >
        <LazyHomeIcon class="fill-gray-400 hover:fill-primary transition-all w-8 h-8"></LazyHomeIcon>
      </nuxt-link>
      <div class="dropdown dropdown-hover">
        <label class=" " tabindex="0">
          <div class="cursor-pointer relative">
            <div
              class="absolute top-[-5px] left-0  text-white w-4 h-4 rounded-full flex items-center justify-center bg-primary">
              <small class="text-[8px]">{{cartCount}}</small>
            </div>
            <nuxt-link to="/basket"
                       exact-active-class="activeClass"
            >
              <LazyBagIcon  class="fill-gray-400 hover:fill-primary transition-all w-8 h-8"></LazyBagIcon>
            </nuxt-link>
          </div>
        </label>
        <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60" tabindex="0">
          <LazyEmptyView v-if="getCartData.length===0"></LazyEmptyView>
          <template v-else>
            <li v-for="(item,idx) in getCartData" :key="idx" class="w-full  hover:!bg-transparent rounded-xl ">
              <LazyCartItem :item="item"></LazyCartItem>
            </li>
          </template>
        </ul>
      </div>


    </div>
  </nav>

</template>

<script >
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters('cart',['cartCount','getCartData'])
  }
}

</script>

