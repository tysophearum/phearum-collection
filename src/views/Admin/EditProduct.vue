<template>
    <div class="h-[100vh] overflow-auto bg-[#f9f8ff] rounded-xl">
        <div class=" px-6 h-[97%]">
            <div class="flex justify-between items-center my-2">
                <button @click="this.$router.go(-1)" class="flex items-center h-6 my-4">
                    <img class="h-full mr-2" src="https://cdn-icons-png.flaticon.com/512/66/66822.png" alt="">
                    <p class=" text-xl">Back</p>
                </button>
                <button @click="addProduct" class=" p-2 bg-blue-500 rounded-lg text-white">Update Product</button>
            </div>
            <div class=" bg-[#ffa3059c] p-6 rounded-lg h-[92%] overflow-auto">
                <div class=" mb-4">
                    <h2 class=" text-lg">Product Name: </h2>
                    <input v-model="product.name" class=" border rounded-xl w-full h-10" type="text" name="" id="">
                </div>
                <div class=" mb-4">
                    <h2 class=" text-lg">Product Description: </h2>
                    <input v-model="product.description" class=" border rounded-xl w-full h-10" type="text" name="" id="">
                </div>
                <div class=" my-4">
                    <h2 class=" text-lg">Product Category: </h2>
                    <select v-model="product.category_id" class=" border rounded-xl w-full h-10" name="" id="">
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>
                <div class=" my-4">
                    <h2 class=" text-lg">Product Price: </h2>
                    <input v-model="product.price" class=" border rounded-xl w-full h-10" type="number" step="0.01" name="" id="">
                </div>
                <div class=" my-4">
                    <h2 class=" text-lg">Product Sizes: </h2>
                    <label>
                        <input
                            type="checkbox"
                            @change="toggleSelectAll"
                            v-model="selectAll"
                        />
                        Select All
                    </label>
                    <br />
                    <div class=" flex justify-between">
                        <label v-for="(size, index) in sizes" :key="index">
                            <input
                                type="checkbox"
                                :value="size.id"
                                v-model="selectedSizes"
                            />
                            {{ size.size }}
                        </label>
                    </div>
                </div>
                <div>

                    <!-- Display selected images (optional) -->
                    <div >
                        <h2 class=" text-lg">Selected Images:</h2>
                        <div class=" flex">
                            <div v-for="(image, index) in product.images" :key="index" class="flex items-center justify-center w-40 h-40 bg-[#ffa405] rounded-lg mx-1">
                                <img :src="apiUrl+image.image_path" alt="Selected Image" class=" w-full object-cover"/>
                            </div>
                            <div v-for="(image, index) in selectedImages" :key="index" class="flex items-center justify-center w-40 h-40 bg-[#ffa405] rounded-lg mx-1">
                                <img :src="imageUrl(image)" alt="Selected Image" class=" w-full object-cover"/>
                            </div>
                            <div class="file-input-container">
                                <input class="file-input" type="file" @change="handleFileChange" multiple />
                                <label class="file-input-label" for="file-input">
                                    <!-- Replace the plus sign below with your desired custom design -->
                                    <span class="plus-sign">+</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "EditProduct",
    data() {
        return {
            selectedSizes: [],
            sizes: undefined,
            categories: undefined,
            selectAll: false,
            product: Object(),
            selectedImages: [],
            apiUrl: import.meta.env.VITE_API_URL,
        }
    },
    methods: {
        getSizes() {
            axios.get(this.apiUrl+"/api/size")
            .then(res => {
                this.sizes = res.data
            })
        },
        getCategories() {
            axios.get(this.apiUrl+"/api/category")
            .then(res => {
                this.categories = res.data
            })
        },
        toggleSelectAll() {
            if(this.selectAll){
                this.sizes.forEach(size => {
                    this.selectedSizes.push(size.id)
                });
            }
            else{
                this.sizes.forEach(size => {
                    this.selectedSizes.pop()
                });
            }
        },
        addProduct(){
            axios.put(this.apiUrl+"/api/product/"+this.$route.params.id, {
                name: this.product.name,
                category_id: this.product.category_id,
                price: this.product.price,
                sizes: this.selectedSizes,
                description: this.product.description
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('tokenAdmin'),
                }
            })
            .then(async res => {
                let newProduct = res.data
                await this.selectedImages.forEach(image => {
                    let formdata = new FormData()
                    formdata.append("product_id", newProduct.id)
                    formdata.append("image", image)
                    axios.post(this.apiUrl+"/api/image", formdata, {header: { "content-type": "multipart/form-data" }})
                });
                this.$router.push('/ProductManagement')
            })
        },
        getProduct() {
            axios.get(this.apiUrl+'/api/product/'+this.$route.params.id)
            .then(res => {
                this.product = res.data
                this.product.sizes.forEach(size => {
                    this.selectedSizes.push(size.id)
                });
            })
        },
        handleFileChange(event) {
            // Get the selected files from the input element
            const files = event.target.files;

            // Convert the FileList to an array
            const selectedImages = Array.from(files);

            // Store the selected images in the data property
            // this.selectedImages = selectedImages;
            selectedImages.forEach(element => {
                this.selectedImages.push(element)
            });
        },
        imageUrl(file) {
            // Create a local URL for the selected image to display it (optional)
            return URL.createObjectURL(file);
        },
    },
    mounted() {
        this.getProduct(),
        this.getSizes(),
        this.getCategories()
    }
}
</script>
<style scoped>
.file-input-container {
  position: relative;
  display: inline-block;
}
/* Hide the default file input */
.file-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* Style the custom button */
.file-input-label {
  display: inline-block;
  width: 10rem;
  height: 10rem;
  background-color: #ffa405;
  color: white;
  font-size: 6rem;
  cursor: pointer;
  border-radius: 0.5rem/* 8px */;
  text-align: center;
}
/* Optional: Style the plus sign or your custom design */
.plus-sign {
  font-weight: bold;
}
</style>