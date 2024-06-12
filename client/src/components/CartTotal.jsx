import React from 'react'

const CartTotal = ({ cart, clearCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-1 px-3 bg-zinc-100">
      <div className="flex justify-center items-center">
        <p className="text-xl">
          Subtotal:{' '}
          <span className="text-2xl font-black text-red-500">
            $
            {/* {cart?.reduce((acc, curr) => {
              return acc + curr.selectedItem.price + curr.selectedFrame.price
            }, 0)} */}
            {cart?.reduce((acc, curr) => {
              return acc + curr.price
            }, 0)}
          </span>
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button
          className="bg-blue-600 text-xs font-bold text-white p-2 rounded-md h-[33px] w-[60%] flex justify-center items-center hover:scale-105 transition-all my-1"
          onClick={clearCart}
        >
          Checkout
        </button>
        <button
          className="bg-red-600 text-xs font-bold text-white p-2 rounded-md h-[33px] w-[60%] flex justify-center items-center hover:scale-105 transition-all my-1"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default CartTotal
