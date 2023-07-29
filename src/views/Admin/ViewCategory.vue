<template>
    <div class=" bg-[#f9f8ff] rounded-xl px-4  h-[100vh] overflow-auto">
        <DeleteProductPopup :callParentFunction="fetchCategory" :cancelDeleteProduct="cancelDeleteCat" v-if="showDeleteProduct"/>
        <SelectSpecialProduct :callParentFunction="fetchCategory" :cancel-change="cancelChangeSpecialProduct" v-if="showSelectSpecialProduct"/>
        <button @click="this.$router.go(-1)" class="flex items-center h-6 my-4">
            <img class="h-full mr-2" src="https://cdn-icons-png.flaticon.com/512/66/66822.png" alt="">
            <p class=" text-xl">Back</p>
        </button>
        <div>
            <div class="flex justify-between">
                <div class=" bg-white my-4 w-[40%] p-4 rounded-3xl h-fit">
                    <h2 class=" mb-2 text-lg">Category name:</h2>
                    <h1 class=" mb-6 text-4xl font-bold ">{{ category.name }}</h1>
                    <h2 class=" mb-2 text-lg">Category description:</h2>
                    <h1 class=" text-xl">{{ category.description }}</h1>
                </div>
                <div class="w-[59%] bg-white my-4 p-4 rounded-3xl">
                    <div class="flex justify-between">
                        <p class="font-bold text-lg mb-1">Special product</p>
                        <button @click="changeSpecialProduct()" class="bg-black text-white text-sm p-1 rounded-xl duration-150 hover:bg-gray-600">Change</button>
                    </div>
                    <div v-if="category.special_product_id != null" @click="select(category.special_product.id)" class="w-full  flex justify-between cursor-pointer">
                        <img class="w-[49%] h-fit" :src="'https://api.tysophearum.tech'+category.special_product.images[0].image_path" alt="">
                        <div class="w-[49%]">
                            <h2 class=" mb-2 text-lg">Product name:</h2>
                            <h1 class=" mb-2 text-4xl font-bold ">{{ category.special_product.name }}</h1>
                            <h2 class=" mb-2 text-lg">Product description:</h2>
                            <h1 class=" text-xl font-bold">{{ category.special_product.description }}</h1>
                        </div>
                    </div>
                    <h1 v-if="category.special_product_id == null">No Special product selected</h1>
                </div>
            </div>
        </div>
        <RouterLink to="/addproduct" class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded">Add Product</button>
        </RouterLink>
        <div class=" w-full h-12 rounded bg-[#ffa405] grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <RouterLink v-for="(product, index) in category.products" :to="'/viewProduct/'+product.id" class=" w-full h-12 border border-white rounded bg-[#ffa30571] duration-100 grid grid-cols-3 hover:bg-[#ffa305ae]" >
            <button class=" h-full flex items-center justify-center">{{ product.name }}</button>
            <button class=" h-full flex items-center justify-center">{{ product.description }}</button>
            <div class=" h-full flex items-center justify-between px-24">
                <button class=" bg-white w-20 h-9 rounded duration-150 hover:h-11" @click="edit(product.id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white duration-150 hover:h-11" @click="showDeleteCat(); passId(product.id)">Delete</button>
            </div>
        </RouterLink>
    </div>
</template>
<script>
import axios from 'axios';
import DeleteProductPopup from '../../components/DeleteProductPopup.vue';
import SelectSpecialProduct from '../../components/SelectSpecialProduct.vue'
export default {
    name: "ViewCategory",
    components: {
        DeleteProductPopup,
        SelectSpecialProduct
    },
    data() {
        return {
            showSelectSpecialProduct: false,
            showDeleteProduct: false,
            category: {
                name: '',
                description: '',
                special_product: {
                    name: '',
                    images: [{
                        image_path: ''
                    }]
                }
            },
        }
    },
    methods: {
        fetchCategory() {
            axios.get("https://api.tysophearum.tech/api/category/products/"+this.$route.params.id)
            .then(res => {
                this.category = res.data
                this.category.special_product = this.category.products.find(product => product.id == this.category.special_product_id)
            })
            .catch(err => {
                console.error(err);
            })
        },
        cancelChangeSpecialProduct(){
            this.showSelectSpecialProduct = false
        },
        changeSpecialProduct(){
            this.showSelectSpecialProduct = true
        },
        edit(id) {
            this.$store.commit('setAdminEditedProductId', id)
            this.$router.push('/EditProduct')
        },
        showDeleteCat() {
            this.showDeleteProduct = true
        },
        cancelDeleteCat() {
            this.showDeleteProduct = false
        },
        passId(id) {
            this.$store.commit("setDeleteProductId", id)
        },
    },
    mounted() {
        this.fetchCategory()
    }
}
</script>