import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/",
      name: "Home",
      component: () => import('../views/Home.vue')
    },
    {
      path: "/form",
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/productForm.vue')
    },
    {
      path: "/selectProduct",
      name: "selectProduct",
      component: () => import('../views/SelectProduct.vue')
    },
    {
      path: "/promotion",
      name: "promotion",
      component: () => import('../views/Promotion.vue')
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import('../views/Cart.vue')
    },
    {
      path: "/customerInformation",
      name: "customerInformationrt",
      component: () => import('../views/CustomerInformation.vue')
    },
    {
      path: "/shippingInformation",
      name: "shippingInformationrt",
      component: () => import('../views/ShippingInformation.vue')
    },
    {
      path: "/admin",
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Admin/Main.vue'),
      children: [
        {
          path: "/CategoryManagement",
          name: "Category",
          component: () => import('../views/Admin/Category.vue')
        },
        {
          path: "/ProductManagement",
          name: "Product",
          component: () => import('../views/Admin/Product.vue')
        },
        {
          path: "/addProduct",
          name: "AddProduct",
          component: () => import('../views/Admin/AddProduct.vue')
        },
        {
          path: "/viewProduct",
          name: "ViewProduct",
          component: () => import('../views/Admin/ViewProduct.vue')
        },
        {
          path: "/EditProduct",
          name: "EditProduct",
          component: () => import('../views/Admin/EditProduct.vue')
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.path == '/cart' && this.$store.state.token == false){
//     next('/')
//   }
// })

export default router
