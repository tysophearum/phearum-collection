import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

const store = createStore({
    state: {
      selectedItem: null,
      products: undefined,
      selectedProductId: undefined,
      token: undefined,
      categoryId: undefined,
      showAddCategoryPopup: false,
      showDeleteCategory: false,
      deleteCategoryId: undefined,
      showEditCategory: false,
      editCategoryId: undefined,
      showDeleteProduct: false,
      deleteProductId: undefined,
      showAddProduct: false,
      addProductId: undefined,
      index: null,
      adminSelectedProductId: undefined,
      adminEditProductId: undefined,
    },
    mutations: {
      setSelectedItem(state, data) {
        state.selectedItem = data
      },
      setProducts(state, data){
        state.products = data
      },
      setSelectedProductId(state, data){
        state.selectedProductId = data
      },
      setToken(state, data) {
        state.token = data
      },
      setCategoryId(state, data) {
        state.categoryId = data
      },
      setShowAddCategoryPopup(state, data) {
        state.showAddCategoryPopup = data
      },
      setShowDeleteCategory(state, data) {
        state.showDeleteCategory = data
      },
      setDeleteCategoryId(state, data) {
        state.deleteCategoryId = data
      },
      setCategoryChange(state, data) {
        state.categoryChange = data
      },
      setShowEditCategory(state, data) {
        state.showEditCategory = data
      },
      setEditCategoryId(state, data) {
        state.editCategoryId = data
      },
      setShowDeleteProduct(state, data) {
        state.showDeleteProduct = data
      },
      setDeleteProductId(state, data) {
        state.deleteProductId = data
      },
      setShowAddProduct(state, data) {
        state.showAddProduct = data
      },
      setAddProductId(state, data) {
        state.addProductId = data
      },
      setIndex(state, data) {
        state.index = data
      },
      setAdminSelectedProductId(state, data){
        state.adminSelectedProductId = data
      },
      setAdminEditedProductId(state, data){
        state.adminEditProductId = data
      },
    },
    getters: {

    },
    plugins: [createPersistedState()],
})

export default store