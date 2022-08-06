import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { setIsLoading } from './isLoading.slice'
import { getShoppingCartThunk } from './shoppingCart.slice'

export const userPurchasesSlice = createSlice({
    name: 'userPurchases',
    initialState: [],
    reducers: {
        setUserPurchases: (state, action) => {
            return action.payload
        }
    }
})

export const purchaseCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getPurchasesByUserIdThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
        .then((res) => dispatch(setUserPurchases(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setUserPurchases } = userPurchasesSlice.actions;

export default userPurchasesSlice.reducer;
