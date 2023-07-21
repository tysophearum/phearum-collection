<template class>
    <div class=" h-[100vh] flex flex-col justify-between w-full">
        <div>
            <Header />
            <div class="breadcrumb flex h-5 mx-4">
                <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="">
                <span class=" mx-3"> > </span> <b>Customer Information</b>
                <span class=" mx-3"> > </span> <span>Shipping Information </span>
                <span class=" mx-3"> > </span> <span>Payment Method </span>
            </div>
            <div class=" w-[98%] m-4 flex justify-between">
                <div class=" w-[55%]">
                    <div class="w-full h-1 bg-black"></div>
                    <h1 class=" font-bold text-xl my-2">Customer Information</h1>
                    <input class=" w-full h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="Email" type="text" name="" id="">
                    <div class="w-full h-1 bg-black my-4"></div>
                    <h1 class=" font-bold text-xl my-2">Shipping Address</h1>
                    <div class="name flex justify-between">
                        <input class=" w-[49%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="First name" type="text" name="" id="">
                        <input class=" w-[49%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="Last name" type="text" name="" id="">
                    </div>
                    <input class=" w-full my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="Company (Optional)" type="text" name="" id="">
                    <div class="name flex justify-between">
                        <input class=" w-[70%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="Address" type="text" name="" id="">
                        <input class=" w-[29%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="Apt. (Optional)" type="text" name="" id="">
                    </div>
                    <div class="name flex justify-between">
                        <select class=" w-[39%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" name="" id="">
                            <option value="">Country</option>
                        </select>
                        <select class=" w-[39%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" name="" id="">
                            <option value="">
                                State
                            </option>
                        </select>
                        <input class=" w-[19%] my-1 h-10 border-[3px] border-black rounded-xl p-2 text-lg shadow-lg" placeholder="Zip" type="text" name="" id="">
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <div class=" flex justify-between items-center">
                        <a href="">&lt;<span class=" underline ml-1">Go Back</span></a>
                        <RouterLink to="/shippingInformation">
                            <button class=" p-3 py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-xl font-bold">Continue to Shipping Method</button>
                        </RouterLink>
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
        <Footer />
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue'
export default {
    name: "CustomerInformation",
    components: {
        Header,
        Footer
    }
}
</script>