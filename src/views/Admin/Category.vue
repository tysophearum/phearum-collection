<template>
    <div class="bg-[#f9f8ff] rounded-xl">
        <AddCategoryPopup v-if="this.$store.state.showAddCategoryPopup"/>
        <DeleteCategoryPopup v-if="this.$store.state.showDeleteCategory"/>
        <EditCategoryPopUp v-if="this.$store.state.showEditCategory"/>
        <div class=" p-6">
            <h1 class=" text-3xl font-bold">Category Management</h1>
        </div>
        <div class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showAddCategoryPopup(true)">Add Category</button>
        </div>
        <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(category, index) in categories" class=" w-full h-12 rounded bg-[#ffa30571] border border-white grid grid-cols-3">
            <div class=" flex items-center justify-center">{{ category.name }}</div>
            <div class=" flex items-center justify-center">{{ category.description }}</div>
            <div class="flex items-center justify-between px-24">
                <button class=" bg-white w-20 h-9 rounded" @click="showEditCat(category.id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white" @click="showDeleteCat(); passId(category.id)">Delete</button>
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
        EditCategoryPopUp
    },
    data() {
        return {
            categories: undefined,
            change: this.$store.state.categoryChange,
        }
    },
    methods: {
        showDeleteCat() {
            this.$store.commit("setShowDeleteCategory", true)
        },
        passId(id) {
            this.$store.commit("setDeleteCategoryId", id),
            console.log(this.$store.state.deleteCategoryId);
        },
        getCategories() {
            axios.get("http://localhost:8000/api/category")
            .then(res => {
                this.categories = res.data
            })
        },
        showAddCategoryPopup (show) {
            this.$store.commit("setShowAddCategoryPopup", show)
        },
        showEditCat(id) {
            this.$store.commit("setShowEditCategory", true)
            this.$store.commit("setEditCategoryId", id)
            
        }
    },
    watch: {
        change() {
            console.log("adsfv");
        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>