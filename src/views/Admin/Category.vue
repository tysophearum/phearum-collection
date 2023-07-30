<template>
    <div class="bg-[#f9f8ff] rounded-xl px-6">
        <AddCategoryPopup :call-parent-function="getCategories" :cancel-popup="cancelAddCategoryPopup" v-if="addCategoryPopup"/>
        <DeleteCategoryPopup :call-parent-function="getCategories" :cancelShowDeletePopup="cancelDeleteCat" v-if="showDeleteCategory"/>
        <EditCategoryPopUp :call-parent-function="getCategories" :cancel-edit-category="cancelEditCat" v-if="showEditCategory"/>
        <div class=" py-6">
            <h1 class=" text-3xl font-bold">Category Management</h1>
        </div>
        <div class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showAddCategoryPopup()">Add Category</button>
        </div>
        <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(category, index) in categories" class=" w-full h-12 rounded bg-white my-2 shadow duration-100 grid grid-cols-3 hover:bg-[#ffa305ae]">
            <RouterLink :to="'/viewCategory/'+category.id" class=" flex items-center justify-center">
                <button>{{ category.name }}</button>
            </RouterLink>
            <RouterLink :to="'/viewCategory/'+category.id" class=" flex items-center justify-center">
                <button>{{ category.description }}</button>
            </RouterLink>
            <div class="flex items-center justify-between px-24">
                <button class=" bg-blue-600 text-white w-20 h-9 rounded duration-150 hover:h-11" @click="showEditCat(category.id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white duration-150 hover:h-11" @click="showDeleteCat(); passId(category.id)">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import AddCategoryPopup from '../../components/AddCategoryPopUp.vue';
import DeleteCategoryPopup from '../../components/DeleteCategoryPopup.vue';
import EditCategoryPopUp from '../../components/EditCategoryPopUp.vue';
export default{
    name: 'Category',
    components: {
        AddCategoryPopup,
        DeleteCategoryPopup,
        EditCategoryPopUp,
    },
    data() {
        return {
            categories: undefined,
            change: this.$store.state.categoryChange,
            addCategoryPopup: false,
            showDeleteCategory: false,
            showEditCategory: false,
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        showDeleteCat() {
            this.showDeleteCategory = true
        },
        cancelDeleteCat() {
            this.showDeleteCategory = false
        },
        passId(id) {
            this.$store.commit("setDeleteCategoryId", id)
        },
        getCategories() {
            axios.get(this.apiUrl+"/api/category")
            .then(res => {
                this.categories = res.data
            })
        },
        showAddCategoryPopup () {
            this.addCategoryPopup = true
        },
        cancelAddCategoryPopup () {
            this.addCategoryPopup = false
        },
        showEditCat(id) {
            this.showEditCategory = true
            this.$store.commit("setEditCategoryId", id)
        },
        cancelEditCat() {
            this.showEditCategory = false
        },
    },
    mounted() {
        this.getCategories()
    }
}
</script>