import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategories: (state, action) => {
            return action.payload
        },
    }
})

export const getCategoriesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
        .then(res => dispatch(setCategories(res.data.data.categories)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
