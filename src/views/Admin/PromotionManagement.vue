<template>
    <div class="bg-[#f9f8ff] rounded-xl">
        <div class=" p-6">
            <h1 class=" text-3xl font-bold">Product Promotion Management</h1>
        </div>
        <div class=" grid grid-cols-2 gap-2 px-6">
            <div class=" w-full h-8 rounded bg-[#ffa405] grid grid-cols-1 my-1">
                <div class=" flex items-center justify-center font-bold">Products</div>
            </div>
            <div class=" w-full h-8 rounded bg-[#ffa405] grid grid-cols-1 my-1">
                <div class=" flex items-center justify-center font-bold">Promotion Products</div>
            </div>
        </div>
        <div class="mx-6" v-for="item in items">
            <h1 class=" text-2xl">{{ item.name }}</h1>
            <div class="grid grid-cols-2 gap-2">
                <div class="w-full">
                    <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-2">
                        <div class=" flex items-center justify-center font-bold">Product</div>
                        <div class=" flex items-center justify-center font-bold">Action</div>
                    </div>
                    <div v-for="product in item.products" class=" w-full h-12 rounded bg-white my-1 shadow grid grid-cols-2">
                        <div class=" flex items-center justify-center font-bold">{{ product.name }}</div>
                        <button @click="promote(product.id)" class=" duration-150 flex items-center justify-center h-5 my-4 hover:ml-8">
                            <p class="">Move</p>
                            <img class="h-full ml-2" src="https://cdn-icons-png.flaticon.com/512/66/66831.png" alt="">
                        </button>
                    </div>
                </div>
                <div class="w-full">
                    <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-2">
                        <div class=" flex items-center justify-center font-bold">Action</div>
                        <div class=" flex items-center justify-center font-bold">Product</div>
                    </div>
                    <div v-for="product in item.propotion_products" class=" w-full h-12 rounded my-1 shadow bg-[#ffa30571] grid grid-cols-2">
                        <button @click="demote(product.id)" class=" duration-150 flex items-center justify-center h-5 my-4 hover:mr-8">
                            <img class="h-full mr-2" src="https://cdn-icons-png.flaticon.com/512/66/66822.png" alt="">
                            <p class="">Move</p>
                        </button>
                        <div class=" flex items-center justify-center font-bold">{{ product.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "PromotionManagement",
    data() {
        return {
            items: undefined,
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        fetchIndex() {
            axios.get(this.apiUrl+"/api/product/all")
            .then(res => {
                this.items = res.data
            })
            .catch((err) => {
                console.error(err);
            })
        },
        promote(id) {
            axios.get(this.apiUrl+"/api/product/promote/"+id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('tokenAdmin'),
                }
            })
            .then(res => {
                this.fetchIndex()
            })
        },
        demote(id) {
            axios.get(this.apiUrl+"/api/product/demote/"+id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('tokenAdmin'),
                }
            })
            .then(res => {
                this.fetchIndex()
            })
        }
    },
    mounted() {
        this.fetchIndex()
    }
}
</script>