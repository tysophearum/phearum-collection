<template>
    <div v-for="(order, index) in orders" class=" p-2">
        <div class=" shadow-lg rounded-lg border border-black p-2">
            <b>Order: {{ index+1 }}</b>
            <div>
                <div>
                    <b>Price: </b>${{ order.price }}
                </div>
                <div>
                    <b>Shipping Address: </b>{{ order.shipping_information.address }}
                </div>
                <div>
                    <b>Shipping Method: </b>{{ order.shipping_method.name }}
                </div>
            </div>
            <div class="">
                <b>Products:</b>
                <div class=" pl-10 grid grid-cols-4 gap-3">
                    <div v-for="item in order.items" class=" p-2 grid grid-cols-2 place-items-center shadow-lg rounded-lg my-1 bg-gray-100">
                        <img class="" :src="apiUrl+item.product.images[0].image_path" alt="">
                        <div>
                            <div><b>Size:</b> {{ item.size_id+36 }}</div>
                            <div><b>Quantity:</b> {{ item.quantity }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'OrderHistory',
    data() {
        return {
            orders: Array,
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        fetchOrders() {
            axios.get(this.apiUrl+'/api/order', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            .then(res => {
                this.orders = res.data
                console.log(this.orders);
            })
            .catch(err => {
                console.error(err);
            })
        }
    },
    mounted() {
        this.fetchOrders()
    }
}
</script>