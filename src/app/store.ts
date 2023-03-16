import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
})

const state = store.getState()
export type RootStateType = typeof state

export default store
