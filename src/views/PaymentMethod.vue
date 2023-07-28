<template class>
    <div class=" h-fit flex flex-col justify-between w-full">
        <div>
            <div class="breadcrumb flex h-5 mx-4">
                <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="">
                <span class=" mx-3"> > </span> <span>Customer Information</span>
                <span class=" mx-3"> > </span> <span>Shipping Information </span>
                <span class=" mx-3"> > </span> <b>Payment Method </b>
            </div>
            <div class=" w-[98%] m-4 flex justify-between">
                <div class=" w-[55%]">
                    <div class="w-full h-1 bg-black"></div>
                    <h1 class=" font-bold text-xl my-2">Shipping Address</h1>
                    <div class=" flex justify-between">
                        <span>{{ this.$store.state.shippingInformation.address }}</span>
                        <RouterLink to="/shippingInformation">
                            <button class=" text-lg bg-[#ffa405] rounded-lg px-2 h-fit">Edit</button>
                        </RouterLink>
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <h1 class=" font-bold text-xl my-2">Shipping Method</h1>
                    <div class=" flex justify-between">
                        <span>{{ this.$store.state.shippingMethod.name + ",  $"+ this.$store.state.shippingMethod.price}}</span>
                        <RouterLink to="/shippingMethod">
                            <button class=" text-lg bg-[#ffa405] rounded-lg px-2 h-fit">Edit</button>
                        </RouterLink>
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <h1 class=" font-bold text-xl my-2">Payment Method</h1>
                    <form>
                        <input v-model="card_number" type="number" required class=" rounded-2xl mt-4 w-full py-3 border-2 border-black pl-4" placeholder="Card Number" />
                        <div class="w-full flex gap-4 mt-4">
                            <input v-model="name_on_card" type="text" required class="rounded-2xl w-1/3 border-2 border-black pl-4 py-3" placeholder="Cardholder Name" />
                            <input v-model="expire_date" type="text" required class="rounded-2xl w-1/3 border-2 border-black pl-4 py-3" placeholder="MM/YY" />
                            <input v-model="cvv" type="number" required class="rounded-2xl w-1/3 py-3 border-2 border-black pl-4" placeholder="CVV" />
                        </div>
                        <div class=" flex justify-between items-center mt-4">
                        <button @click="this.$router.go(-1)">&lt;<span class=" underline ml-1">Go Back</span></button>
                            <!-- <RouterLink to="/shippingInformation"> -->
                                <div @click="validate()" class=" p-3 py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-xl font-bold cursor-pointer">Complete Order</div>
                            <!-- </RouterLink> -->
                        </div>
                    </form>
                </div>
                <div class=" w-[44%]">
                    <div class=" bg-[#ffa405] w-full rounded-2xl p-3 h-fit">
                        <h1 class=" text-3xl font-bold text-center mb-9">Summary (1 item)</h1>
                        <div class=" flex justify-between my-4 pl-5 text-2xl">
                            <span class=" w-1/3">Subtotal:</span>
                            <span class=" w-1/3 text-center">$200.00</span>
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
                        <div class=" flex justify-between my-4 pl-5 text-2xl">
                            <span class=" w-1/3">Discount:</span>
                            <span class=" w-1/3 text-center">0%</span>
                        </div>
                        <div class="w-full h-1 bg-black"></div>
                        <div class=" flex justify-between my-4 pl-5 text-2xl font-bold">
                            <span class=" w-1/3">Total:</span>
                            <span class=" w-1/3 text-center">$200.00</span>
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
    data() {
        return {
            card_number: null,
            name_on_card: null,
            expire_date: null,
            cvv: null
        }
    },
    methods: {
        validate() {
            if(this.card_number !== null, this.name_on_card !== null, this.expire_date !== null, this.cvv !== null) {
                axios.post('http://174.138.17.246:8000/api/order', {}, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    }
                })
                .then(async res => {
                    let order = res.data
                    this.$store.state.shippingInformation.order_id = order.id
                    console.log(order);
                    await axios.post('http://174.138.17.246:8000/api/shippingInformation', this.$store.state.shippingInformation, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token'),
                        }
                    })
                    this.$store.state.shippingMethod.order_id = order.id
                    await axios.post('http://174.138.17.246:8000/api/shippingMethod', this.$store.state.shippingMethod, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token'),
                        }
                    })
                    this.$store.state.shippingMethod.order_id = order.id
                    await axios.post('http://174.138.17.246:8000/api/paymentMethod', {
                        name_on_card: this.name_on_card,
                        card_number: this.card_number+'',
                        expire_date: this.expire_date,
                        cvv: this.cvv+'',
                        order_id: order.id
                    }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token'),
                        }
                    })
    
                    this.$router.push('/home/1')
                }).catch(err => {
                    console.log(err);
                })
            }
            else{
                console.log("hell no");
            }
        }
    },
    computed: {
        yearRange() {
            const range = 5;
            const startYear = this.currentYear - range;
            const endYear = this.currentYear + range;
            return Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
        }
    }
}
</script>