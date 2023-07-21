<template>
    <Header class=" sticky top-0 z-10"/>
    <div class=" bg-[url('../img/landing.webp')] bg-no-repeat bg-cover rounded-xl h-[50vh] mx-4 flex">
        <div class="w-1/2 h-full flex flex-col items-center justify-center">
            <h1 class=" text-5xl font-bold text-white my-9 bg-[#0000008b] p-3">NIKE AIR JORDEN</h1>
            <button class=" w-96 bg-[#ffa405] text-white text-xl font-bold p-2 rounded-lg shadow-2xl shadow-grey-900 my-9">Add to Cart</button>
        </div>
        <div class=" flex flex-col items-center justify-center">
            <h1 class=" text-3xl text-white bg-[#0000008b] p-3 my-9">Failure makes me work even harder.</h1>
            <h1 class=" text-3xl text-white font-bold bg-[#0000008b] p-3 my-9">$249.99</h1>
        </div>
    </div>
    <PromotionItem v-for="promotion in promotions" :name="promotion.name" :price="promotion.price" :src="promotion.images[0].image_path" />
    <Footer />
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import PromotionItem from '../components/PromotionItem.vue';
import axios from 'axios';
export default {
    name: 'PromotionPage',
    components: {
        Header,
        Footer,
        PromotionItem
    },
    data() {
        return {
            promotions: undefined
        }
    },
    methods: {
        getPromotions() {
            axios.get("http://localhost:8000/api/product/promotion/"+this.$store.state.categoryId)
            .then(res => {
                this.promotions = res.data
            })
        }
    },
    mounted() {
        this.getPromotions()
    }
}
</script>