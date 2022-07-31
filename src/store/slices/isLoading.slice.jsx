import { createSlice } from '@reduxjs/toolkit';

export const isLoading = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
        setIsLoading: (state, action) => {
            return action.payload;
        }
    }
})

export const { setIsLoading } = isLoading.actions;

export default isLoading.reducer;
