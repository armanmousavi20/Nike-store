import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddToCartType, ClearToCartType } from '../type'
import toast from 'react-hot-toast'

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') || '{}')
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setAddItemToCart: (state: any, action: PayloadAction<AddToCartType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id,
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1

        toast.success(`Item QTY increased`)
      } else {
        const temp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(temp)

        toast.success(`${action.payload.title} added to Cart`)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item: any) => item.id !== action.payload.id,
      )

      state.cartItems = removeItem
      localStorage.setItem('cart', JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} Removed From Cart`)
    },
    setIncreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id,
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1

        toast.success(`Item QTY Increased`)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    setDecreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id,
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.success(`Item QTY Decreased`)
      }
    },
    setClearCartItems: (state) => {
      state.cartItems = []
      toast.success('Cart Cleared')
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    setGetTotal: (state) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, cartQuantity } = cartItem
          const totalPrice = price * cartQuantity

          cartTotal.totalAmount += totalPrice
          cartTotal.totalQTY += cartQuantity
          return cartTotal
        },
        { totalAmount: 0, totalQTY: 0 },
      )

      state.cartTotalAmount = totalAmount
      state.cartTotalQuantity = totalQTY
    },
  },
})

export const {
  setCloseCart,
  setOpenCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setClearCartItems,
  setDecreaseItemQty,
  setIncreaseItemQty,
  setGetTotal,
} = CartSlice.actions
export default CartSlice.reducer
