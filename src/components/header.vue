<template>
    <div class="h-fit p-2 bg-white">
        <div class="h-12 bg-[#ffa405] rounded-lg flex items-center justify-between px-4 header">
            <RouterLink class="h-full flex items-center justify-center" to="/">
                <img src="./icons/logo.png" alt="logo.png" class="h-[80%]">
            </RouterLink>
            <div class="flex w-1/2 h-full items-center justify-between">
                <button v-for="category in categories" class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold" @click="fetchCategoryProducts(category.id)">{{ category.name }}</button>
            </div>
            <CartPopup v-if="cart" />
            <UserPopup v-if="userInfo && this.$store.state.token"/>
            <div class="flex h-full w-[12%] items-center justify-between">
                <RouterLink v-if="notLogin()" to="/login">
                    <button class=" bg-black text-white p-1 rounded-lg">Log in</button>
                </RouterLink>
                <button v-if="notLogin()" class=" bg-white p-1 rounded-lg">Register</button>
                <button v-if="isLogin()" @click="showCart()" class="h-[57%]">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="">
                </button>
                <button v-if="isLogin()" @click="showUserInfo()" class="h-[57%]">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                </button>
                <img class="h-[57%]" src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="">
            </div>
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
                cart: false,
                userInfo: false,
                categories: undefined,
            }
        },
        name: "Header",
        methods: {
            showCart() {
                this.cart = !this.cart
                if(this.userInfo){
                    this.userInfo = false
                }
            },
            showUserInfo() {
                this.userInfo = !this.userInfo
                if(this.cart){
                    this.cart = false
                }
            },
            fetchCategories() {
                axios.get("http://localhost:8000/api/category")
                .then(res => {
                    this.categories = res.data
                })
            },
            fetchCategoryProducts(id) {
                axios.get("http://localhost:8000/api/product/category/" + id)
                .then(res => {
                    this.$store.commit("setProducts", res.data)
                    console.log(this.$store.state.products);
                    this.$store.commit('setCategoryId', id)
                    this.$router.push('/')
                })
            },
            isLogin() {
                if(this.$store.state.token){
                    return true
                }
                else{
                    return false
                }
            },
            notLogin() {
                if(this.$store.state.token){
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
</style>