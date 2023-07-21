<template>
    <div v-if="this.$store.state.products.special_product" class="h-96 rounded-2xl bg-[#ffa405] mx-4 my-1 flex items-center justify-center">
        <div class="w-1/3 mx-10">
            <h1 class="text-7xl text-white font-bold drop-shadow-xl">{{ this.$store.state.products.special_product.name }}</h1>
            <p class="text-xl text-white my-6">
              {{ this.$store.state.products.special_product.description }}
            </p>
            <button class="bg-black p-4 shadow-xl text-white font-bold rounded-2xl hover:bg-white hover:text-black hover:duration-300" @click="select(this.$store.state.products.special_product.id)">VIEW PRODUCT</button>
        </div>
        <img class="drop-shadow-lg mx-10 relative" :src="this.$store.state.products.special_product.images[0].image_path" alt="shoe1.png">
    </div>
    <div class="bg-black mx-4 p-4 shadow-xl text-white font-bold rounded-2xl flex justify-center items-center">
      <span class="mx-10"> Limited offer. 30% off on some products availeble in our store!!! </span>
      <RouterLink to="/promotion">
        <button class="mx-10 bg-white px-6 py-2 shadow-xl text-black font-bold rounded-2xl border-white border-2 hover:bg-black hover:text-white hover:border-white hover:duration-300">START SHOPPING</button>
      </RouterLink>
    </div>
    <div class="grid grid-cols-5 gap-6 p-4">
      <!-- <RouterLink to="/selectProduct"> -->
        <StoreItem v-for="product in this.$store.state.products.products" :name="product.name" :price="product.price" :src="product.images[0].image_path" @click="select(product.id)"/>
      <!-- </RouterLink> -->
      
    </div>
</template>

<script>

import StoreItem from '../components/StoreItem.vue'

import axios from 'axios';

export default {
  data() {
    return {
      products: undefined
    };
  },
  name: "HomeContent",
  components: {
    StoreItem
  },
  // mounted() {
  //   this.fetchProducts();
  // },
  methods: {
    select(id) {
      this.$store.commit("setSelectedProductId", id)
      this.$router.push('/selectProduct')
    }
  }
}
</script>
