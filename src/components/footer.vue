<template>
    <footer class="bg-[#ffa405] py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="mb-6 md:mb-0">
                <h3 class="text-white text-lg font-semibold mb-4">About Us</h3>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam eget velit eleifend ultricies.</p>
            </div>
            <div class="mb-6 md:mb-0">
                <h3 class="text-white text-lg font-semibold mb-4">Categories</h3>
                <ul>
                <li><a href="#" class="text-white hover:text-yellow-200">Clothing</a></li>
                <li><a href="#" class="text-white hover:text-yellow-200">Accessories</a></li>
                <li><a href="#" class="text-white hover:text-yellow-200">Shoes</a></li>
                <li><a href="#" class="text-white hover:text-yellow-200">Electronics</a></li>
                </ul>
            </div>
            <div class="mb-6 md:mb-0">
                <h3 class="text-white text-lg font-semibold mb-4">Contact</h3>
                <p class="text-white">123 Example St</p>
                <p class="text-white">City, Country</p>
                <p class="text-white">info@example.com</p>
                <p class="text-white">+1 234 567 890</p>
            </div>
            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-yellow-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13v6h-2v-6m4-4a4 4 0 11-8 0 4 4 0 018 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9a3 3 0 003 3V3h-2a2 2 0 00-2 2v4M3 21v-2a4 4 0 014-4h2M5 8V6a2 2 0 012-2h6a2 2 0 012 2v2"></path></svg>
                </a>
                <a href="#" class="text-white hover:text-yellow-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>
                <a href="#" class="text-white hover:text-yellow-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4L12 14.01l-3-3"></path></svg>
                </a>
                </div>
            </div>
            </div>
            <hr class="my-8 border-yellow-300">
            <p class="text-center text-white text-sm">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </footer>

</template>

<script>
    export default {
        name: "Footer",
    }
</script>