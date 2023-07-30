<template class>
    <div class=" h-fit flex flex-col justify-between w-full">
        <div>
            <div class="breadcrumb flex h-5 mx-4">
                <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="">
                <span class=" mx-3"> > </span> <span>Customer Information</span>
                <span class=" mx-3"> > </span> <b>Shipping Information </b>
                <span class=" mx-3"> > </span> <span>Payment Method </span>
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
                    <div class=" flex text-lg my-1">
                        <input v-model="selectedOption" type="radio" name="shipping" :value="op1">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>{{ op1.name }} </span>
                            <span>${{ op1.price }}</span>
                        </span>
                    </div>
                    <div class=" flex text-lg my-1">
                        <input v-model="selectedOption" type="radio" name="shipping"  :value="op2">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>{{ op2.name }}</span>
                            <span>${{ op2.price }}</span>
                        </span>
                    </div>
                    <div class=" flex text-lg my-1">
                        <input v-model="selectedOption" type="radio" name="shipping"  :value="op3">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>{{ op3.name }}</span>
                            <span>${{ op3.price }}</span>
                        </span>
                    </div>
                    <div class=" flex text-lg my-1">
                        <input v-model="selectedOption" type="radio" name="shipping"  :value="op4">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>{{ op4.name }}</span>
                            <span>${{ op4.price }}</span>
                        </span>
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <div class=" flex justify-between items-center">
                        <button @click="this.$router.go(-1)">&lt;<span class=" underline ml-1">Go Back</span></button>
                            <button @click="nextPage()" class=" p-3 py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-xl font-bold">Continue to Payment Method</button>
                    </div>
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
export default {
    name: "CustomerInformation",
    components: {
        
    },
    data() {
        return {
            selectedOption: undefined,
            shippingInfo: undefined,
            op1: {name: 'UPS Ground', price: 2.20},
            op2: {name: 'UPS 3 Day', price: 2.20},
            op3: {name: 'UPS 2nd Day Air', price: 2.20},
            op4: {name: 'UPS Next Day Air', price: 2.20},
            
        }
    },
    methods: {
        nextPage(){
            if(this.selectedOption){
                this.$store.state.shippingMethod = this.selectedOption
                this.$router.push({name: 'PaymentMethod'})
            }
        }
    },
    mounted() {
        this.shippingInfo = this.$store.state.shippingInformation
    }
}
</script>