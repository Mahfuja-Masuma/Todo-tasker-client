
import { configureStore } from '@reduxjs/toolkit'
import ProfileSlice from '../slices/ProfileSlice'
import todoSlice from '../slices/todoSlice'
import TodoSummarySlice from '../slices/TodoSummarySlice'


export const store = configureStore({
  reducer: {
    profile: ProfileSlice,
    todo: todoSlice,
    allTodos: TodoSummarySlice 
  },
}) 