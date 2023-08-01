<template>
    <div class="h-fit p-2 bg-white">
        <div class="h-12 bg-[#ffa405] rounded-lg flex items-center justify-between px-4 header">
            <RouterLink class="h-full flex items-center justify-center" to="/home/1">
                <img src="./icons/logo.png" alt="logo.png" class="h-[80%]">
            </RouterLink>
            <div class="bigCategories flex w-[70%] h-full items-center overflow-auto rounded-lg">
                <RouterLink v-for="category in categories" :to="'/home/'+category.id" :class="`w-[100px] min-w-[100px] mx-2 hover:bg-black hover:text-white hover:duration-300 h-[75%] ${category.id === this.$route.params.id ? 'bg-black text-white' : 'bg-white'}  rounded-xl shadow-lg flex justify-center items-center text-sm font-bold`">
                    <button>{{ category.name }}</button>
                </RouterLink>
            </div>
            <CartPopup @event-name="unshow" class=" duration-200" v-if="this.$store.state.showCart" />
            <UserPopup class=" duration-200" v-if="userInfo && true"/>
            <div class="flex h-full w-36 items-center justify-between">
                <RouterLink v-if="notLogin()" to="/login">
                    <button class=" bg-black text-white p-1 rounded-lg">Log in</button>
                </RouterLink>
                <RouterLink v-if="notLogin()" to="/register">
                    <button class=" bg-white p-1 rounded-lg">Register</button>
                </RouterLink>
                <button v-if="isLogin()" @click="showCart()" class="h-[57%]">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="">
                </button>
                <button v-if="isLogin()" @click="showUserInfo()" class="h-[57%]">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                </button>
                <RouterLink v-if="isLogin()" class="h-[57%]" to="/orderHistory">
                    <button class="h-full">
                        <img class="h-full" src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/orders-icon.png" alt="">
                    </button>
                </RouterLink>
            </div>
        </div>
        <div class="smallCategories hidden w-full h-10 mt-2 items-center overflow-auto rounded-lg border-2 border-[#ffa405]">
            <RouterLink v-for="category in categories" :to="'/home/'+category.id" :class="`w-[100px] min-w-[100px] mx-2 hover:bg-black hover:text-white hover:duration-300 h-[75%] ${category.id === this.$route.params.id ? 'bg-black text-white' : 'bg-white'}  rounded-xl shadow-lg border border-black flex justify-center items-center text-sm font-bold`">
                <button>{{ category.name }}</button>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import CartPopup from './CartPopup.vue';
import UserPopup from './UserPopup.vue';
import axios from 'axios';
    export default {
        data(){
            return {
                userInfo: false,
                categories: undefined,
                apiUrl: import.meta.env.VITE_API_URL,
            }
        },
        name: "Header",
        methods: {
            showCart() {
                this.$store.state.showCart = !this.$store.state.showCart
                if(this.userInfo){
                    this.userInfo = false
                }
            },
            showUserInfo() {
                this.userInfo = !this.userInfo
                if(this.$store.state.showCart){
                    this.$store.state.showCart = false
                }
            },
            fetchCategories() {
                console.log(this.apiUrl);
                axios.get(this.apiUrl+"/api/category")
                .then(res => {
                    this.categories = res.data
                })
            },
            select(id) {
                this.$router.push('/home/'+id)
            },
            isLogin() {
                if(localStorage.getItem('token')){
                    return true
                }
                else{
                    return false
                }
            },
            notLogin() {
                if(localStorage.getItem('token')){
                    return false
                }
                else{
                    return true
                }
            }
        },
        components: {
            CartPopup,
            UserPopup
        },
        mounted() {
            this.fetchCategories();
        }
    }
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
}
@media only screen and (max-width: 950px){
    .smallCategories{
        display: flex;
    }
    .bigCategories{
        display: none;
    }
}
</style>