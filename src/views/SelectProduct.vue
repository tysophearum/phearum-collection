<template>
    <div class="breadcrumb flex h-5 mx-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png" alt="">
        <span class=" mx-3"> > </span> <span>Nike</span> <span class=" mx-3"> > </span> <b> Nike flyease</b>
    </div>
    <div class="productInfo flex justify-between">
        <div class="bg-[#ffa405] rounded-xl m-4 h-[56vh] w-[48%] flex items-center justify-center shadow-2xl shadow-grey-900">
            <img :src="product.images[i].image_path" alt="">
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
    <div class=" flex">
        <div v-for="(image, index) in product.images" :class="`view w-[15vw] h-26 mx-4 border-4 rounded-lg border-[#ffa405] duration-150 flex items-center justify-center ${index === i ? 'bg-[#ffa405]' : 'bg-white'}`">
            <img class=" overflow-hidden" :src="image.image_path" alt="" @click="changeImage(index)">
        </div>
    </div>
    <div class=" p-4">
        <div class="w-full h-1 bg-black my-2"></div>
        <h1 class="text-xl font-bold my-1">Related products</h1>
        <div class="grid grid-cols-5 gap-6 p-4">
            <StoreItem name="Nike Impact 4" price="200" src="https://static.nike.com/a/images/t_default/f3b760d7-2c28-4801-bec6-12c32d7137b1/impact-4-basketball-shoes-bwLwnb.png" />
            <StoreItem name="Nike SA" price="200" src="https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw9a3fac75/nk/2ad/e/3/0/d/4/2ade30d4_d24d_4955_b49e_b5d37b49e03d.png?sw=520&sh=520&sm=fit" />
            <StoreItem name="Nike Air Zoom Flight 95" price="200" src="https://static.nike.com/a/images/t_default/850885fb-624d-42e8-b403-a72f282400ff/air-zoom-flight-95-shoes-058DbL.png" />
            <StoreItem name="Nike Elevate 3" price="200" src="https://static.nike.com/a/images/t_default/6a773a8c-1dcb-4559-9e65-40d2b9917c2b/elevate-3-basketball-shoes-QT43Gj.png" />
            <StoreItem name="Giannis Immortality" price="200" src="https://static.nike.com/a/images/t_default/58fa611a-337e-4716-9106-144ebc168cc5/giannis-immortality-basketball-shoes-p9QlJF.png" />
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
            notSelect: false
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
            await axios.get("http://174.138.17.246:8000/api/product/"+id)
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
                axios.post("http://174.138.17.246:8000/api/item", data, {
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