
import { configureStore } from '@reduxjs/toolkit'
import ProfileSlice from '../slices/ProfileSlice'
import todoSlice from '../slices/todoSlice'


export const store = configureStore({
  reducer: {
    profile: ProfileSlice,
    todo: todoSlice
  },
}) 