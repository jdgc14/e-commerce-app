import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import isLoading from './slices/isLoading.slice'

export default configureStore({
    reducer: {
        isLoading,
        products
    }
})
