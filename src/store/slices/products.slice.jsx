import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },
        filterProductsByPrice: (state, action) => {
            return state.filter((product) => product.price <= action.payload.maxPrice && product.price >= action.payload.minPrice);
        }
    }
})

export const filterProductsByPriceThunk = ({ minPrice, maxPrice }) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .then(() => dispatch(filterProductsByPrice({ minPrice, maxPrice })))
        .finally(() => dispatch(setIsLoading(false)));
}


export const getAllProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getProductsByCategorieThunk = (categoryId) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products?category=' + categoryId)
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getProductsByNameThunk = (nameProduct) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products?query=' + nameProduct)
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts, filterProductsByPrice } = productsSlice.actions;

export default productsSlice.reducer;
