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
    addForm: (state, action: PayloadAction<any>) => {
        let res = state.data
        res.push(action.payload)
        state.data = res
        res = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addForm } = CreatePostSlice.actions

export default CreatePostSlice.reducer