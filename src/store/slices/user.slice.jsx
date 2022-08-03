import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {

    },
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },

        setToken: (state, action) => {
            return {
                ...state,
                token: action.payload
            }
        }
    }
})

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
