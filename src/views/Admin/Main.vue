<template>
    <div class=" flex w-full">
        <div class="h-[100vh] w-1/6 border flex flex-col justify-between items-center py-6 bg-[#ffa405] rounded-xl">
            <div class=" w-full flex flex-col justify-between items-center py-6 bg-[#ffa405] rounded-xl">
                <img src="../../components//icons/logo.png" class=" w-32 my-6" alt="">
                <RouterLink v-for="(side, index) in sides" :key="index" :to="'/' + side.route" :class="`w-[86%] py-3 text-center rounded-lg my-2 duration-200 text-[#939393] ${this.$store.state.index === index ? 'bg-black':'bg-white'}`" @click="handleClick(index)">
                    {{ side.name }}
                </RouterLink>
            </div>
            <button @click="logout" class="w-[86%] py-3 text-center bg-black rounded-lg my-2 duration-200 text-[#939393] hover:bg-slate-800">Logout</button>
        </div>
        <RouterView class="w-5/6"/>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            sides: [
                {
                    name: "Category Management",
                    route: "CategoryManagement"
                },
                {
                    name: "Product Management",
                    route: "ProductManagement"
                },
                {
                    name: "Promotion Management",
                    route: "PromotionManagement"
                },
            ],
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        logout() {
            axios.get(this.apiUrl+"/api/logout", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('tokenAdmin'),
                }
            }).then(res => {
                this.$store.commit('setUser', false)
                localStorage.removeItem('tokenAdmin')
                this.$router.push('/login')
                // this.$router.go()
            })
        },
        handleClick(index) {
            this.$store.commit('setIndex', index)
        },
    }
}
</script>