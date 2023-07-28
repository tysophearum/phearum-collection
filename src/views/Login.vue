<template>
    <div class="body bg-gray-100 flex items-center justify-center min-h-screen">
        <div id="wrapper" class="shadow-md rounded-xl px-8 py-6 w-1/3">
        <h2 class="text-2xl font-bold mb-6 text-white">Login</h2>
        <form method="post" @submit="login">
          <div class="mb-4">
            <label class="block text-black text-sm font-bold mb-2" for="username">Email</label>
            <input v-model="email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email">
          </div>
          <div class="mb-6">
            <label class="block text-black text-sm font-bold mb-2" for="password">Password</label>
            <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" @click="">Sign In</button>
            <RouterLink to='/register'>
              <button class="text-blue-500 font-bold">Sign Up</button>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
          return {
            email: '',
            password: ''
          };
        },
        name: "Login",
        methods: {
          login (event) {
            event.preventDefault(); // Prevent default form submission

            let data = {
              email: this.email,
              password: this.password
            }
            
            axios.post("https://api.tysophearum.tech/api/login", data)
              .then(response => {
                let res = response.data;
                
                if(res.user.role === 1) {
                  this.$store.commit('setUser', res)
                  localStorage.setItem('token', res.token)
  
                  this.email = '';
                  this.password = '';
                  
                  this.$router.push("/")
                }
                else if (res.user.role === 2) {
                  this.$store.commit('setUser', res)
                  localStorage.setItem('tokenAdmin', res.token)
  
                  this.email = '';
                  this.password = '';
                  
                  this.$router.push("/admin")
                }
                      
              })
              .catch(error => {
                // Handle any errors
                console.error(error);
              });
          }
        }
    }
</script>
<style scoped>
    .body{
      background-image: url("https://images.squarespace-cdn.com/content/v1/59f6af428c56a8c070e33354/1563397786708-IFSQCT4AHKZS4XZTP5VP/cafe.png?format=2500w");
      background-repeat: no-repeat;
      background-size: cover;
    }
    #wrapper{
      backdrop-filter: blur(20px);
    }
</style>