<template>
    <div class=" bg-[#f9f8ff] rounded-xl px-4 ">
        <button @click="this.$router.go(-1)" class="flex items-center h-6 my-4">
            <img class="h-full mr-2" src="https://cdn-icons-png.flaticon.com/512/66/66822.png" alt="">
            <p class=" text-xl">Back</p>
        </button>
        <div class="flex py-4 justify-between">
            <div class="w-[49.5%]">
                <div class=" bg-white w-full p-8 rounded-3xl">
                    <img class="w-full" :src="product.images[i].image_path" alt="">
                </div>
                <div class=" bg-white my-4 w-full p-4 rounded-3xl">
                    <h2 class=" mb-2 text-lg">Product name:</h2>
                    <h1 class=" mb-6 text-4xl font-bold ">{{ product.name }}</h1>
                    <h2 class=" mb-2 text-lg">Product description:</h2>
                    <h1 class=" text-xl">{{ product.description }}</h1>
                </div>
            </div>
            <div class="w-[49.5%]">
                <div class=" grid grid-cols-3 gap-3">
                    <button v-for="(image, index) in product.images" :key="index" :class="`flex items-center ${index === i?'bg-black':'bg-white'} duration-200 justify-center rounded-lg p-4`" @click="select(index)" >
                        <img :src="image.image_path" alt="">
                    </button>
                </div>
                <div class=" bg-white my-4 w-full p-4 rounded-3xl">
                    <h2 class=" mb-2 text-lg">Product category:</h2>
                    <h1 class=" mb-6 text-4xl font-bold">{{ product.category }}</h1>
                    <h2 class=" mb-2 text-lg">Product price:</h2>
                    <h1 class=" mb-6 text-xl">$ {{ product.price }}</h1>
                    <h2 class=" mb-2 text-lg">Product sizes:</h2>
                    <div class="grid grid-cols-7 gap-2">
                        <span class=" bg-[#f9f8ff] w-fit p-2 mx-2 text-sm rounded-full font-bold" v-for="size in product.sizes" >{{ size.size }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "ViewProduct",
    data() {
        return {
            i: 0,
            product: {
                name: '', 
                description: '',
                category_id: null,
                price: null,
                promotion_id: null,
                category: null,
                sizes: [
                    {
                        id: null,
                        size: null
                    }
                ],
                images: [
                    {
                        image_path: ''
                    }
                ]
            }
        }
    },
    methods: {
        getProduct() {
            axios.get("http://174.138.17.246:8000/api/product/"+this.$route.params.id)
            .then(res => {
                this.product = res.data
                axios.get("http://174.138.17.246:8000/api/category/" + this.product.category_id)
                .then(res => {
                    this.product.category = res.data.name
                })
            })
        },
        select(id){ 
            this.i = id
        }
    },
    mounted() {
        this.getProduct()
    }
}
</script>