import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
const Cart = ({ type, size, price }) => {
  const { cart, addItem, clearCart } = useContext(CartContext)

  const handleAdd = () => {
    addItem({ type, size, price })
  }
  return (
    <>
      <div className="mt-5">
        <div className="">
          {type !== null && size !== null ? (
            // <div className="flex flex-col gap-2 bg-zinc-300 text-zinc-900 p-3 rounded">
            <button
              className="border-4 border-green-600 bg-green-400 text-white p-2 mt-3 rounded-md font-serif w-[80%] hover:scale-105 transition-all shadow-md"
              onClick={handleAdd}
            >
              Add To Cart
            </button>
          ) : (
            <span></span>
          )}
        </div>

        <div>
          {!cart.cart.length ? (
            <span></span>
          ) : (
            <div className="flex flex-col mt-10 p-4 rounded shadow-inner shadow-zinc-400 text-left text-black">
              <p className="mb-2">Items currently in your cart</p>
              {cart?.cart.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center border-b-2 border-zinc-100 md:w-[75%] py-1 my-1"
                >
                  {i + 1}
                  <p className="flex text-zinc-600">
                    <span className="font-black mr-6">{item.type}</span>
                    <span className="font-bold text-md mr-2">Size:</span>
                    <span className="font-bold text-black mr-4">
                      {item.size}
                    </span>
                    <span className="font-bold">${item.price}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {cart.cart.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 py-1 px-3 bg-zinc-100">
          <div className="flex justify-center items-center">
            <p className="text-xl">
              Subtotal:{' '}
              <span className="text-2xl font-black text-red-500">
                $
                {cart?.cart.reduce((acc, curr) => {
                  return acc + curr.price
                }, 0)}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className="border-4 bg-blue-600 text-sm text-white p-2 rounded-md h-[40px] w-[100%] hover:scale-105 transition-all"
              onClick={clearCart}
            >
              Checkout
            </button>
            <button
              className="border-4 bg-red-600 text-sm text-white p-2 rounded-md h-[40px] w-[100%] hover:scale-105 transition-all"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </>
  )
}

export default Cart
