import { configureStore } from '@reduxjs/toolkit'
import PopupSlice from '../features/Popup/PopupSlice'
import PopupAuthSlice from '../features/Popup/PopupAuthSlice'
import CreatePostSlice from '../features/CreatePost/CreatePostSlice'

export const store = configureStore({
  reducer: {
    popup: PopupSlice,
    popupAuth: PopupAuthSlice,
    createPost: CreatePostSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch