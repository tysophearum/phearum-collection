<template>
    <PromotionItem class=" cursor-pointer" v-for="promotion in promotions" :name="promotion.name" :price="promotion.price" :src="apiUrl+promotion.images[0].image_path" @click="select(promotion.id)"/>
</template>
<script>
import PromotionItem from '../components/PromotionItem.vue';
import axios from 'axios';
export default {
    name: 'PromotionPage',
    components: {
        PromotionItem
    },
    data() {
        return {
            promotions: undefined,
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        getPromotions() {
            axios.get(this.apiUrl+"/api/product/promotion/"+this.$route.params.id)
            .then(res => {
                this.promotions = res.data
            })
        },
        select(id) {
            this.$router.push('/selectProduct/'+id)
        }
    },
    created() {
        this.getPromotions()
    }
}
</script>