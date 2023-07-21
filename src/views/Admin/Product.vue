<template>
    <div class="bg-[#f9f8ff] rounded-xl">
        <DeleteProductPopup v-if="this.$store.state.showDeleteProduct"/>
        <div class=" p-6">
            <h1 class=" text-3xl font-bold">Product Management</h1>
        </div>
        <RouterLink to="/addproduct" class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showAddProductPopup">Add Product</button>
        </RouterLink>
        <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(product, index) in products" class=" w-full h-12 border border-white rounded bg-[#ffa30571] duration-100 grid grid-cols-3 hover:bg-[#ffa305ae]" >
            <button class=" h-full flex items-center justify-center" @click="select(product.id)">{{ product.name }}</button>
            <button class=" h-full flex items-center justify-center" @click="select(product.id)">{{ product.description }}</button>
            <div class=" h-full flex items-center justify-between px-24">
                <button class=" bg-white w-20 h-9 rounded" @click="edit(product.id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white" @click="showDeleteCat(); passId(product.id)">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import DeleteProductPopup from '../../components/DeleteProductPopup.vue';
export default{
    name: 'Category',
    components: {
        DeleteProductPopup,
    },
    data() {
        return {
            products: undefined,
            change: this.$store.state.categoryChange,
        }
    },
    methods: {
        showDeleteCat() {
            this.$store.commit("setShowDeleteProduct", true)
        },
        passId(id) {
            this.$store.commit("setDeleteProductId", id)
        },
        getProducts() {
            axios.get("http://localhost:8000/api/product")
            .then(res => {
                this.products = res.data
            })
        },
        showAddProductPopup () {
            this.$store.commit("setShowAddProduct", true)
        },
        showEditCat(id) {
            this.$store.commit("setShowEditCategory", true)
            this.$store.commit("setEditCategoryId", id)
        },
        select(id) {
            this.$store.commit('setAdminSelectedProductId', id)
            this.$router.push('/viewProduct')
        },
        edit(id) {
            this.$store.commit('setAdminEditedProductId', id)
            this.$router.push('/EditProduct')
        }
    },
    watch: {
        change() {
            console.log("adsfv");
        }
    },
    mounted() {
        this.getProducts()
    }
}
</script>