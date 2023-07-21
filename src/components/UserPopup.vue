<template>
    <div class=" fixed top-12 flex justify-end w-full pr-[5.3%]">
        <div class=" flex flex-col items-end">
            <div class=" mr-10 shadow-xl" style="border-color: transparent transparent rgb(243 244 246 / var(--tw-bg-opacity)) transparent; border-style: solid; border-width: 0px 15px 15px 15px; width: 0px;"></div>
            <div class=" h-fit shadow-xl w-96 bg-gray-100 rounded-xl p-2">
                <h1 class=" text-lg font-bold">User Information</h1>
                <div class="w-full h-[3px] bg-black"></div>
                <p class=" text-lg"><b>Name:</b>  {{ user.name }}</p>
                <p class=" text-lg"><b>Email:</b>  {{ user.email }}</p>
                <button @click="logout()" class="w-full py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] font-bold">Logout</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "UserPopup",
    data() {
        return {
            user: {
                name: '',
                email: ''
            }
        }
    },
    methods: {
        logout() {
            axios.get("http://localhost:8000/api/logout", {
                headers: {
                    Authorization: 'Bearer ' + this.$store.state.token,
                }
            }).then(res => {
                console.log(res.data);
                this.$store.commit('setToken', false)
                this.$router.push('/')
            })
        },
        getUser() {
            axios.get("http://localhost:8000/api/user", {
                headers: {
                    Authorization: 'Bearer ' + this.$store.state.token,
                }
            }).then(res => {
                this.user = res.data
            })
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>