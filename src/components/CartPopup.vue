<template>
    <div class=" fixed top-12 flex justify-end w-full pr-[10%]">
        <div class=" flex flex-col items-end">
            <div class=" mr-10 shadow-xl" style="border-color: transparent transparent rgb(243 244 246 / var(--tw-bg-opacity)) transparent; border-style: solid; border-width: 0px 15px 15px 15px; width: 0px;"></div>
            <div class=" h-fit max-h-56 shadow-xl w-96 bg-gray-100 rounded-xl p-2">
                <h1 class=" text-lg font-bold">Item Added to Cart</h1>
                <div class="w-full h-[3px] bg-black"></div>
                <!-- <button @click="getCart()">here</button> -->
                <div class=" h-fit max-h-28 overflow-auto">
                    <div v-for="item in items" class=" bg-white rounded-lg px-2 shadow mb-2">
                        <p class=" text-lg">{{ item.product.name }}</p>
                        <p class=" text-lg">Qty: {{item.quantity}} | ${{item.product.price}}</p>
                    </div>
                    
                </div>
                <div class=" flex justify-between">
                    <RouterLink to="/cart" class="w-[46%]">
                        <button @click="this.$store.state.showCart = !this.$store.state.showCart" class=" w-full py-1 rounded-lg border-4 border-[#ffa405] font-bold">View Cart</button>
                    </RouterLink>
                    <RouterLink class="w-[46%]" to="/shippingInformation">
                        <button @click="this.$store.state.showCart = !this.$store.state.showCart" class=" w-full py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] font-bold">Checkout</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "CartPopup",
    data() {
        return {
            items: undefined
        }
    },
    methods: {
        getCart() {
            axios.get("http://api.tysophearum.tech/api/cart", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            }).then(res => {
                this.items = res.data
            })
        },
    },
    mounted() {
        this.getCart()
    }
}
</script>