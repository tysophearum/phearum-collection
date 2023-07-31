<template>
    <div class="productInfo flex justify-between px-4">
        <div class="images w-[48%]">
            <div class="mainImage bg-[#ffa405] rounded-xl my-4 h-[56vh] w-full flex items-center justify-center shadow-2xl shadow-grey-900">
                <img :src="apiUrl+product.images[i].image_path" alt="">
            </div>
            <div class=" w-full grid grid-cols-3 gap-4 mb-6">
                <div v-for="(image, index) in product.images" :class="`view w-full cursor-pointer h-26 mx-4 border-4 rounded-lg border-[#ffa405] duration-150 flex items-center justify-center ${index === i ? 'bg-[#ffa405]' : 'bg-white'}`">
                    <img class=" overflow-hidden" :src="apiUrl+image.image_path" alt="" @click="changeImage(index)">
                </div>
            </div>
        </div>
        <div class="info w-[48%] p-4">
            <h1 class=" text-5xl font-bold">{{product.name}}</h1>
            <h1 class=" text-5xl font-bold my-4">${{product.price}}</h1>
            <div class="w-full h-1 bg-black"></div>
            <h1 class="text-xl font-bold my-1">Size</h1>
            <p v-if="notSelect" class=" text-red-500">Please select a size</p>
            <select v-model="size_id" class="border-[3px] border-black rounded-lg w-full p-2 mt-2" name="size" id="">
                <option v-for="(size, index) in product.sizes" :value="size.id">{{size.size}}</option>
            </select>
            <div class="w-full h-1 bg-black my-2"></div>
            <h1 class="text-xl font-bold my-1">Quantity</h1>
            <div class="">
                <button @click="minus" class=" text-2xl">-</button>
                <input class=" text-center" type="number" :value="quantity" min="1" readonly>
                <button @click="plus" class=" text-2xl">+</button>
            </div>
            <div class="w-full h-1 bg-black my-2"></div>
            <button @click="addToCart()" class=" w-full bg-[#ffa405] text-xl font-bold p-2 rounded-lg shadow-2xl shadow-grey-900">Add to Cart</button>
        </div>
    </div>
</template>
<script>
import StoreItem from '../components/StoreItem.vue'
import axios from 'axios'
export default {
    name: "SelectProduct",
    data() {
        return {
            product: {
                id: undefined,
                name: undefined,
                description: undefined,
                category_id: undefined,
                price: undefined,
                promotion_id: undefined,
                created_at: undefined,
                updated_at: undefined,
                sizes: [{
                    id: undefined,
                    size: undefined
                }],
                images: [{
                    image_path: undefined
                }]
            },
            quantity: 1,
            size_id: undefined,
            i: 0,
            notSelect: false,
            apiUrl: import.meta.env.VITE_API_URL,
        };
    },
    methods: {
        plus () {
            this.quantity++
        },
        minus() {
            if(this.quantity > 1) {
                this.quantity--
            }
        },
        async select(id) {
            await axios.get(this.apiUrl+"/api/product/"+id)
            .then(res => {
                this.product = res.data
            })
        },
        changeImage(index) {
            this.i = index
        },
        addToCart () {
            if(localStorage.getItem('token')){
                let data = {
                    product_id: this.product.id,
                    quantity: this.quantity,
                    size_id: this.size_id
                }
                axios.post(this.apiUrl+"/api/item", data, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    }
                })
                .then(res => {
                    this.$router.push('/home/1')
                })
                .catch(() => {
                    this.notSelect = true
                })
            }
            else {
                this.$router.push('/login')
            }
        }
    },
    components: {
        StoreItem,
    },
    async mounted() {
        await this.select(this.$route.params.id)
    }
}
</script>
<style scoped>
@media only screen and (max-width: 850px){
    .productInfo{
        display: block;
    }
    .images{
        width: 96%;
    }
    .mainImage{
        height: 70%;
    }
    .info{
        width: 100%;
    }
}
</style>