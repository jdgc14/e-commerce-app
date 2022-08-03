import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import isLoading from './slices/isLoading.slice'
import shoppingCart from './slices/shoppingCart.slice'
import user from './slices/user.slice'
import userPurchases from './slices/userPurchases.slice'

export default configureStore({
    reducer: {
        isLoading,
        user,
        userPurchases,
        products,
        shoppingCart,

    }
})
