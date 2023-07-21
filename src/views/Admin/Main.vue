<template>
    <div class=" flex w-full">
        <div class="h-[100vh] w-1/6 border flex flex-col items-center py-6 bg-[#ffa405] rounded-xl">
            <img src="../../components//icons/logo.png" class=" w-32 my-6" alt="">
            <RouterLink v-for="(side, index) in sides" :key="index" :to="'/' + side.route" :class="`w-[86%] py-3 text-center rounded-lg my-2 duration-200 text-[#939393] ${this.$store.state.index === index ? 'bg-black':'bg-white'}`" @click="handleClick(index)">
                {{ side.name }}
            </RouterLink>
        </div>
        <RouterView class="w-5/6"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sides: [
                {
                    name: "Category Managemet",
                    route: "CategoryManagement"
                },
                {
                    name: "Product Managemet",
                    route: "ProductManagement"
                },
                {
                    name: "Promotion Managemet",
                    route: "PromotionManagement"
                },
            ],
            
        }
    },
    methods: {
        handleClick(index) {
            this.$store.commit('setIndex', index)
        },
    }
}
</script>