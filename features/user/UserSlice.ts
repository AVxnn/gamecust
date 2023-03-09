import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'


const initialState = {
  user: {} as IUser,
  isAuth: false,
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setAuth } = UserSlice.actions

export default UserSlice.reducer