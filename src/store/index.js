import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

const store = createStore({
    state: {
      showCart: false,
      user: undefined,
      deleteCategoryId: undefined,
      editCategoryId: undefined,
      deleteProductId: undefined,
      index: null,
      shippingInformation: {
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apt: '',
        country: '',
        state: '',
        zip: '',
        order_id: 0
      },
      totalPrice: 0,
      subTotalPrice: 0,
      shippingPrice: 0,
      shippingMethod: undefined
    },
    mutations: {
      setUser(state, data) {
        state.user = data
      },
      setDeleteCategoryId(state, data) {
        state.deleteCategoryId = data
      },
      setCategoryChange(state, data) {
        state.categoryChange = data
      },
      setEditCategoryId(state, data) {
        state.editCategoryId = data
      },
      setDeleteProductId(state, data) {
        state.deleteProductId = data
      },
      setIndex(state, data) {
        state.index = data
      },
      setTotalPrice(state, data) {
        state.totalPrice = data
      },
      setSubTotalPrice(state, data) {
        state.subTotalPrice = data
      },
      setShippingPrice(state, data) {
        state.shippingPrice = data
      },
    },
    getters: {
      getTotalPrice (state) {
        return state.totalPrice
      },
      getSubTotalPrice (state) {
        return state.subTotalPrice
      },
      getShippingPrice (state) {
        return state.shippingPrice
      }
    },
    // plugins: [createPersistedState({})],
})

export default store