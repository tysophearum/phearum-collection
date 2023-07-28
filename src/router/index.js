import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "Register",
      component: () => import('../views/Signin.vue')
    },
    {
      path: "/login",
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/",
      name: "Home",
      component: () => import('../views/Home.vue'),
      beforeEnter: (to, from, next) => {
        if(to.path === '/'){
          next('/home/1')
        }
        else {
          next()
        }
      },
      children: [
        {
          path: '/home/:id',
          name: 'HomeContent',
          component: () => import('../views/HomeContent.vue')
        },
        {
          path: "/selectProduct/:id",
          name: "selectProduct",
          component: () => import('../views/SelectProduct.vue')
        },
        {
          path: "/promotion/:id",
          name: "promotion",
          component: () => import('../views/Promotion.vue')
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import('../views/Cart.vue')
        },
        {
          path: "/shippingInformation",
          name: "shippingInformation",
          component: () => import('../views/ShippingInformation.vue')
        },
        {
          path: "/shippingMethod",
          name: "shippingMethod",
          component: () => import('../views/ShippingMethod.vue')
        },
        {
          path: "/paymentMethod",
          name: "PaymentMethod",
          component: () => import('../views/PaymentMethod.vue')
        },
      ]
    },
    {
      path: "/admin",
      name: 'admin',
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
          path: "/viewProduct/:id",
          name: "ViewProduct",
          component: () => import('../views/Admin/ViewProduct.vue')
        },
        {
          path: "/EditProduct/:id",
          name: "EditProduct",
          component: () => import('../views/Admin/EditProduct.vue')
        },
        {
          path: "/PromotionManagement",
          name: "PromotionManagement",
          component: () => import('../views/Admin/PromotionManagement.vue')
        },
        {
          path: "/viewCategory/:id",
          name: "ViewCategory",
          component: () => import('../views/Admin/ViewCategory.vue')
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path == '/CategoryManagement' ||to.path == '/ProductManagement' ||to.path == '/addProduct' ||to.path == '/PromotionManagement') {
    if(localStorage.getItem('tokenAdmin')) {
      next()
    }
    else{
      next('/login')
    }
  }
  else {
    next()
  }
});

export default router
