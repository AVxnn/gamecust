import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PopupState {
  open: boolean
  img: any
  images: any[]
  video: any
}

const initialState: PopupState = {
  open: false,
  img: '',
  images: [],
  video: ''
}

export const counterSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.open = true
    },
    close: (state) => {
      state.open = false
    },
    addImg: (state, action: PayloadAction<any>) => {
      state.img = action.payload
    },
    addImages: (state, action: PayloadAction<any>) => {
      state.images = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { open, close, addImg, addImages } = counterSlice.actions

export default counterSlice.reducer