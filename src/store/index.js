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
    },
    getters: {

    },
    // plugins: [createPersistedState({})],
})

export default store