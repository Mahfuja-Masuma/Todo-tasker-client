import { createSlice } from '@reduxjs/toolkit'

export const ProfileSlice = createSlice({
    name: 'summary',
    initialState: {
        total: {},
    },
    reducers: {
        addAllTodos: (state, action) => {
            state.total = action.payload
        }
    }
})

export const { addAllTodos } = ProfileSlice.actions;
export default ProfileSlice.reducer;
