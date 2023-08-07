import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {
        type: 'h1',
        value: '',
        id: 0,
    },
  ]
}

export const CreatePostSlice = createSlice({
  name: 'createPost',
  initialState,
  reducers: {

    
  
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem } = CreatePostSlice.actions

export default CreatePostSlice.reducer