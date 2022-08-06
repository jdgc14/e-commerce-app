import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';
import axios from 'axios';


export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        products: [],
        // total: 0
    },
    reducers: {
        setShoppingCart: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const getShoppingCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
        .then(res => dispatch(setShoppingCart(res.data.data.cart.products)))
        .catch(() => dispatch(setShoppingCart([])))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addToCartThunk = (id, quantity) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', { id, quantity }, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)))
}

export const addQuantityThunk = (id, quantity) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.patch('https://ecommerce-api-react.herokuapp.com/api/v1/cart/', { id: id, newQuantity: quantity + 1 }, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const subtractQuantityThunk = (id, quantity) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.patch('https://ecommerce-api-react.herokuapp.com/api/v1/cart/', { id: id, newQuantity: quantity - 1 }, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const removeProductThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.delete('https://ecommerce-api-react.herokuapp.com/api/v1/cart/' + id, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
