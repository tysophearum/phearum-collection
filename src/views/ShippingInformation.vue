<template class>
    <div class=" h-fit flex flex-col justify-between w-full">
        <div>
            <div class="breadcrumb flex h-5 mx-4">
                <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="">
                <span class=" mx-3"> > </span> <b>Customer Information</b>
                <span class=" mx-3"> > </span> <span>Shipping Information </span>
                <span class=" mx-3"> > </span> <span>Payment Method </span>
            </div>
            <div class=" w-[98%] m-4 flex justify-between">
                <form class=" w-[55%]">
                    <div class="w-full h-1 bg-black my-4"></div>
                    <h1 class=" font-bold text-xl my-2">Shipping Address</h1>
                    <div class="name flex justify-between">
                        <div class="w-[49%]">
                            <input required v-model="this.$store.state.shippingInformation.firstName" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" placeholder="First name" type="text" name="" id="">
                            <p class="text-red-500" v-if="validation.firstName === ''">First name is required</p>
                        </div>
                        <div required class="w-[49%]">
                            <input v-model="this.$store.state.shippingInformation.lastName" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" placeholder="Last name" type="text" name="" id="">
                            <p class="text-red-500" v-if="validation.lastName === ''">Last name is required</p>
                        </div>
                    </div>
                    <input v-model="this.$store.state.shippingInformation.company" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" placeholder="Company (Optional)" type="text" name="" id="">
                    <div class="name flex justify-between">
                        <div class="w-[70%]">
                            <input v-model="this.$store.state.shippingInformation.address" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" placeholder="Address" type="text" name="" id="">
                            <p class="text-red-500" v-if="validation.address === ''">Address is required</p>
                        </div>
                        <input v-model="this.$store.state.shippingInformation.apt" class=" w-[29%] my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" placeholder="Apt. (Optional)" type="text" name="" id="">
                    </div>
                    <div class="name flex justify-between">
                        <div class="w-[39%]">
                            <input v-model="this.$store.state.shippingInformation.country" type="text" placeholder="Country" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" name="" id="">
                            <p class="text-red-500" v-if="validation.country === ''">Country is required</p>
                        </div>
                        <div class="w-[39%]">
                            <input v-model="this.$store.state.shippingInformation.state" type="text" placeholder="State" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" name="" id="">
                            <p class="text-red-500" v-if="validation.state === ''">State is required</p>
                        </div>
                        <div class="w-[19%]">
                            <input v-model="this.$store.state.shippingInformation.zip" class=" w-full my-1 h-10 border-2 border-black rounded-xl p-2 text-lg" placeholder="Zip" type="text" name="" id="">
                            <p class="text-red-500" v-if="validation.zip === ''">Zip is required</p>
                        </div>
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <div class=" flex justify-between items-center">
                        <button @click="this.$router.go(-1)">&lt;<span class=" underline ml-1">Go Back</span></button>
                        <!-- <RouterLink to="/shippingInformation"> -->
                            <div @click="validate()" class=" p-3 py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-xl font-bold cursor-pointer">Continue to Shipping Method</div>
                        <!-- </RouterLink> -->
                    </div>
                </form>
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
                        <span class=" w-1/3  pl-5 text-2xl">Gift card or discount code</span>
                        <div class="px-5 flex items-center justify-between">
                            <input class=" w-[70%] my-2 h-10 rounded-xl p-2 text-lg shadow-lg" type="text" name="" id="">
                            <button class=" h-10 w-[29%] p-3 py-1 rounded-lg bg-black text-white text-xl font-bold">Apply</button>

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
import axios from 'axios';
export default {
    name: "CustomerInformation",
    components: {
    },
    data() {
        return {
            validation: Object(),
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        getShippingInfo() {
            axios.get(this.apiUrl+'/api/shippingInformation', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            .then(res => {
                if(res.data){
                    this.$store.state.shippingInformation = res.data
                }
            })
            .catch(err => {
                console.error(err);
            })
        },
        validate() {
            let info = this.$store.state.shippingInformation
            if(info.firstName && info.lastName && info.address && info.country && info.state){
                // localStorage.setItem('shippingInformation', JSON.stringify(info))
                this.$router.push("/shippingMethod")
            }else {
                this.validation = info
            }
        }
    },
    mounted() {
        this.getShippingInfo()
    }
}
</script>