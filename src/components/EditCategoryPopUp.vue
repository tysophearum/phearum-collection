<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4 mb-5">
                    <h1 class=" text-lg font-bold flex items-center">Category name: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md" v-model="category.name">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Category description: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md" v-model="category.description">
                </div>
            </div>
            <div class=" flex justify-end w-full mr-14 mb-6">
                <button class=" bg-red-700 w-fit px-3 text-white h-9 rounded mr-8" @click="showPopup(false)">Cancel</button>
                <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="addCategory()">Edit</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
      return {
        category: {
            id: undefined,
            name: "",
            description: ""
        }
      };
    },
    name: "EditCategoryPopUp",
    methods: {
        showPopup(show) {
            this.$store.commit("setShowEditCategory", show)
        },
        async addCategory() {
                this.showPopup(false)
            axios.put("http://localhost:8000/api/category/"+this.category.id, {
                name: this.category.name, 
                description: this.category.description
            })
            .then(res => {
                console.log(res.data);
                this.$router.go()
            })
        },
        getCategory() {
            axios.get("http://localhost:8000/api/category/" + this.$store.state.editCategoryId)
            .then(res => {
                this.category = res.data
            })
        }
    },
    mounted() {
        this.getCategory()
    }
}
</script>