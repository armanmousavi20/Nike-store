import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setDecreaseItemQty,
  setIncreaseItemQty,
  setRemoveItemFromCart,
} from '../../app/CartSlice'
import { CartItemProps } from '../../type'

const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch()

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart(props))
  }

  const onIncreaseItemQty = () => {
    dispatch(setIncreaseItemQty(props))
  }
  const onDecreaseItemQty = () => {
    dispatch(setDecreaseItemQty(props))
  }

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${props.color} ${props.shadow}
          relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={props.img}
              alt={`img/cart-item/${props.id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium textilg text-slate-900 lg:text-sm ">
                {props.title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{props.text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                onClick={onDecreaseItemQty}
                type="button"
                className="bg-theme-cart rounded
              w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div
                className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 
              flex items-center justify-center"
              >
                {props.cartQuantity}
              </div>
              <button
                onClick={onIncreaseItemQty}
                type="button"
                className="bg-theme-cart rounded
              w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${props.price * props.cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              onClick={onRemoveItem}
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center
              cursor-pointer"
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
