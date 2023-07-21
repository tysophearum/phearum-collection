<template class>
    <div class=" h-[100vh] flex flex-col justify-between w-full">
        <div>
            <Header />
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
                    <div class=" flex">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel distinctio voluptas laudantium temporibus</span>
                        <button class=" text-lg bg-[#ffa405] rounded-lg px-2 h-fit">Edit</button>
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <h1 class=" font-bold text-xl my-2">Shipping Method</h1>
                    <div class=" flex text-lg my-1">
                        <input type="radio" name="shipping" id="">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>UPS Ground </span>
                            <span>$2.20</span>
                        </span>
                    </div>
                    <div class=" flex text-lg my-1">
                        <input type="radio" name="shipping" id="">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>UPS 3 Day Select</span>
                            <span>$2.20</span>
                        </span>
                    </div>
                    <div class=" flex text-lg my-1">
                        <input type="radio" name="shipping" id="">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>UPS 2nd Day Air</span>
                            <span>$2.20</span>
                        </span>
                    </div>
                    <div class=" flex text-lg my-1">
                        <input type="radio" name="shipping" id="">
                        <span class=" mx-2 flex justify-between w-full">
                            <span>UPS Next Day Air</span>
                            <span>$2.20</span>
                        </span>
                    </div>
                    <div class="w-full h-1 bg-black my-4"></div>
                    <div class=" flex justify-between items-center">
                        <a href="">&lt;<span class=" underline ml-1">Go Back</span></a>
                        <button class=" p-3 py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-xl font-bold">Continue to Payment Method</button>
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