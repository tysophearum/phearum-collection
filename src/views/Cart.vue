<template>
    <div class=" p-4">
        <div class="bg-gray-200 rounded-xl p-4 w-full flex">
            <div class="w-2/3 pr-4">
                <h1 class=" text-5xl font-bold">Your Cart</h1>
                <div class=" grid grid-cols-5 text-lg font-bold mt-12">
                    <h1 class=" text-center">Image</h1>
                    <h1 class=" text-center">Item</h1>
                    <h1 class=" text-center">Price</h1>
                    <h1 class=" text-end">Quantity</h1>
                </div>
                <div class="w-full h-1 bg-black"></div>
                <div v-for="(item, index) in items" class=" grid grid-cols-5 text-lg my-2">
                    <img class=" rounded-xl h-fit w-fit object-cover" :src="apiUrl+item.product.images[0].image_path" alt="">
                    <h1 class=" flex items-center justify-center">{{ item.product.name }}({{ item.size_id+36 }})</h1>
                    <h1 class=" flex items-center justify-center">${{ item.product.price }}</h1>
                    <div class="flex justify-end">
                        <h1 class="flex items-center mr-5">{{ item.quantity }}</h1>
                        <div :class="`mx-2 text-2xl flex justify-between overflow-hidden duration-200 ${edit == item.id ? 'w-20':'w-0'}`">
                            <button @click="()=>{if(item.quantity > 0){item.quantity--}}" class=" text-4xl">-</button>
                            <button @click="item.quantity++">+</button>
                            <button @click="editt(item.id, item.quantity)"><img class="h-4" src="https://www.nicepng.com/png/full/81-818228_check-mark-vector-check-icon.png" alt=""></button>
                        </div>
                        <button @click="expand(item.id)" :class="` overflow-hidden duration-200 ${edit == item.id ? 'w-0':'w-6'}`"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt=""></button>
                    </div>
                    <div class="flex justify-end pr-2">
                        <div :class="`text-white h-full flex items-center justify-end overflow-hidden duration-200 ${deletee == item.id ? 'w-full':'w-0'}`">
                            <button @click="destroy(item.id)" class="text-sm p-1 rounded-lg bg-red-500 mx-1">Delete</button>
                            <button @click="expandDelete(item.id)" class="text-sm p-1 rounded-lg bg-blue-500 mx-1">Cancel</button>
                        </div>
                        <button @click="expandDelete(item.id)" :class="` overflow-hidden duration-200 ${deletee == item.id ? 'w-0':'w-6'}`">X</button>
                    </div>
                </div>
            </div>
            <div class=" bg-white w-1/3 rounded-2xl p-3 h-fit mt-24">
                <h1 class=" text-3xl font-bold text-center mb-9">Summary (1 item)</h1>
                <div class=" flex justify-between my-4 pl-5 text-2xl">
                    <span class=" w-1/3">Subtotal:</span>
                    <span class=" w-1/3 text-center">${{ total }}</span>
                </div>
                <div class=" flex justify-between my-4 pl-5 text-2xl">
                    <span class=" w-1/3">Shopping:</span>
                    <span class=" w-1/3 text-center">-</span>
                </div>
                <div class=" flex justify-between my-4 pl-5 text-2xl">
                    <span class=" w-1/3">Est. Taxes:</span>
                    <span class=" w-1/3 text-center">-</span>
                </div>
                <div class="w-full h-1 bg-black"></div>
                <div class=" flex justify-between my-4 pl-5 text-2xl font-bold">
                    <span class=" w-1/3">Total:</span>
                    <span class=" w-1/3 text-center">${{ total }}</span>
                </div>
                <RouterLink to="/shippingInformation">
                    <button class=" w-full py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-2xl font-bold">Checkout</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default {
    name: "Cart",
    components: {
    },
    data(){
        return {
            items: undefined,
            edit: -1,
            deletee: -1,
            total: 0,
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        getCart() {
            axios.get(this.apiUrl+"/api/cart", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            }).then(res => {
                this.items = res.data
                this.total = this.items.reduce((total, obj) => total + (obj.product.price * obj.quantity), 0);
            })
        },
        expand(i) {
            if(this.edit == i){
                this.edit = -1
            }
            else{
                this.edit = i
                this.getCart()
            }
        },
        expandDelete(i) {
            if(this.deletee == i){
                this.deletee = -1
            }
            else{
                this.deletee = i
            }
        },
        editt(id, quantity) {
            axios.put(this.apiUrl+'/api/item/'+id, {quantity: quantity}, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            .then(res => {
                this.getCart()
                this.edit = -1
            })
            .catch(error => {
                console.error(error);
            })
        },
        destroy(id) {
            axios.delete(this.apiUrl+'/api/item/'+id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            .then(res => {
                this.getCart()
            })
        }
    },
    mounted() {
        this.getCart()
    }
}
</script>