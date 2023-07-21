<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4 mb-5">
                    <h1 class=" text-lg font-bold flex items-center">Product name: </h1>
                    <input v-model="name" type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product description: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4 w-full">
                    <h1 class=" text-lg font-bold flex items-start my-4">Product category: </h1>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product price: </h1>
                    <input type="number" step="0.01" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
            </div>
            <div class=" flex justify-end w-full mr-14 mb-6">
                <button class=" bg-red-700 w-fit px-3 text-white h-9 rounded mr-8" @click="showPopup(false)">Cancel</button>
                <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showPopup(false); addCategory()">Add</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
      return {
        name: '',
        description: '',
      };
    },
    name: "AddProductPopUp",
    methods: {
        showPopup(show) {
            this.$store.commit("setShowAddProduct", show)
        },
        addCategory() {
            axios.post("http://localhost:8000/api/product", { 
                name: this.name, 
                description: this.description
            })
            .then(res => {
                console.log(res);
                this.name = ""
                this.description = ""
                this.$router.go()
            })
        }
    }
}
</script>