<template>
    <div class="bg-[#f9f8ff] rounded-xl px-6">
        <DeleteProductPopup :callParentFunction="getProducts" :cancelDeleteProduct="cancelDeleteCat" v-if="showDeleteProduct"/>
        <div class=" py-6">
            <h1 class=" text-3xl font-bold">Products</h1>
        </div>
        <RouterLink to="/addproduct" class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded">Add Product</button>
        </RouterLink>
        <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(product, index) in products" class=" w-full h-12 bg-white my-2 shadow rounded bg-[#ffa30571] duration-100 grid grid-cols-3 hover:bg-[#ffa305ae]" >
            <RouterLink :to="'/viewProduct/'+product.id" class=" flex items-center justify-center">
                <button class=" h-full flex items-center justify-center">{{ product.name }}</button>
            </RouterLink>
            <RouterLink :to="'/viewProduct/'+product.id" class=" flex items-center justify-center">
                <button class=" h-full flex items-center justify-center">{{ product.description }}</button>
            </RouterLink>
            <div class=" h-full flex items-center justify-between px-24">
                <RouterLink :to="'/EditProduct/'+product.id">
                    <button class=" bg-blue-600 text-white w-20 h-9 rounded duration-150 hover:h-11">Edit</button>
                </RouterLink>
                <button class=" bg-red-700 w-20 h-9 rounded text-white duration-150 hover:h-11" @click="showDeleteCat(); passId(product.id)">Delete</button>
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
            showDeleteProduct: false
        }
    },
    methods: {
        showDeleteCat() {
            this.showDeleteProduct = true
        },
        cancelDeleteCat() {
            this.showDeleteProduct = false
        },
        passId(id) {
            this.$store.commit("setDeleteProductId", id)
        },
        getProducts() {
            axios.get("https://api.tysophearum.tech/api/product")
            .then(res => {
                this.products = res.data
            })
        },
    },
    mounted() {
        this.getProducts()
    }
}
</script>