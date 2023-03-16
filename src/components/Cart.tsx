import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setClearCartItems, setCloseCart, setGetTotal } from '../app/CartSlice'
import { RootStateType } from '../app/store'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector(
    (state: RootStateType) => state.cart.cartState,
  )
  const cartItems = useSelector((state: RootStateType) => state.cart.cartItems)
  const totalAmount = useSelector(
    (state: RootStateType) => state.cart.cartTotalAmount,
  )
  const totalQTY = useSelector(
    (state: RootStateType) => state.cart.cartTotalQuantity,
  )
  //console.log(cartItems)

  useEffect(() => {
    dispatch(setGetTotal())
  }, [cartItems])

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      }),
    )
  }
  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen blur-effect-theme opacity-100 z-[250]
        ${
          ifCartState
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItem={onClearCartItems}
          />
          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div
                className="flex flex-col items-start justify-start gap-y-7 lg:gap-y-5
              overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3 "
              >
                {cartItems.map((item: any, index: number) => (
                  <CartItem key={index} {...item} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
