<template>
    <div v-if="products.special_product" class="specialProduct h-96 rounded-2xl bg-[#ffa405] mx-4 my-1 flex items-center justify-center py-2">
        <div class="specialProductDetail w-1/3 mx-10">
          <div>
            <h1 class="specialProductTitle text-7xl text-white font-bold drop-shadow-xl">{{ products.special_product.name }}</h1>
            <p class="specialProductDescription text-white text-xl h-fit break-words my-6 w-96">
              {{ products.special_product.description }}
            </p>
          </div>
            <button class="specialProductViewButton bg-black p-4 shadow-xl text-white font-bold rounded-2xl hover:bg-white hover:text-black hover:duration-300" @click="select(products.special_product.id)">VIEW PRODUCT</button>
        </div>
        <img class="specialProductImage drop-shadow-lg mx-10 relative w-[45%] h-96 object-contain overflow-y-hidden" :src="apiUrl+products.special_product.images[0].image_path" alt="shoe1.png">
    </div>
    <div class="promotiomMessage bg-black mx-4 p-4 shadow-xl text-white font-bold rounded-2xl flex justify-center items-center">
      <span class="promotionText "> Limited offer. 30% off on some products availeble in our store!!! </span>
      <RouterLink :to="'/promotion/'+this.$route.params.id">
        <button class="shoppingButton mx-10 z-10 bg-white px-6 py-2 shadow-xl text-black font-bold rounded-2xl border-white border-2 hover:bg-black hover:text-white hover:border-white hover:duration-300">START SHOPPING</button>
      </RouterLink>
    </div>
    <div class="products grid grid-cols-5 gap-6 p-4">
      <!-- <RouterLink to="/selectProduct"> -->
        <StoreItem v-for="product in products.products" :name="product.name" :price="product.price" :src="apiUrl+product.images[0].image_path" @click="select(product.id)"/>
      <!-- </RouterLink> -->
      
    </div>
</template>

<script>
import StoreItem from '../components/StoreItem.vue'
import axios from 'axios'

export default {
  data(){
    return{
      products: Object,
      id: this.$route.params.id,
      apiUrl: import.meta.env.VITE_API_URL,
    }
    
  },
  name: "HomeContent",
  components: {
    StoreItem,
  },
  watch:{
    '$route.params.id':{
      handler: function() {
      this.fetchProducts()
    },
    deep: true,
    immediate: true
    }
  },
  methods: {
    select(id) {
      this.$router.push('/selectProduct/'+id)
    },
    fetchProducts(){
      axios.get(this.apiUrl+'/api/product/category/'+this.$route.params.id)
      .then(res => {
        this.products = res.data
      })
    },
  },
  created() {
    this.fetchProducts()
  },
}
</script>
<style scoped>
@media only screen and (max-width: 1250px){
    .products{
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 1050px){
    .products{
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 850px){
    .products{
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 650px){
    .specialProductTitle{
      font-size: 2rem/* 72px */;
      line-height: 1;
    }
    .specialProduct{
      height: 18rem/* 384px */;
      height: fit-content;
      display: block;
    }
    .specialProductImage{
      width: 80%;
      height: 10rem;
    }
    .specialProductViewButton{
      font-size: 0.5rem/* 72px */;
      line-height: 1;
      height: fit-content;
    }
    .specialProductDescription{
      font-size: 0.75rem/* 20px */;
      line-height: 0.75rem/* 28px */;
      width: 100%;
    }
    .products{
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .specialProductDetail{
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
    .promotiomMessage{
      font-size: small;
      padding: 5px;
      font-size: 0.65rem;
    }
    .promotionText{
      width: 70%;
    }
    .shoppingButton{
      width: fit-content;
      padding: 2px;
      margin: 0px;
    }
}
</style>