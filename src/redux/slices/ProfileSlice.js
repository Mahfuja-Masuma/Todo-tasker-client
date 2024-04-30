 import { createSlice } from '@reduxjs/toolkit'

 export const ProfileSlice = createSlice({
     name: 'profile',
     initialState: {
         profile: {},
     },
     reducers: {
         setProfile: (state, action) => {
             state.profile = action.payload
         }
     }
 })

 export const { setProfile } = ProfileSlice.actions;
 export default ProfileSlice.reducer;
 