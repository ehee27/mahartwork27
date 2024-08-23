// uses SIZE and FRAME to select product - renders 'ADD To Cart' and adds item
// Checkout only present when 'cart' state is updated

import { products } from '../productData'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Checkout from '../components/Checkout'

const Cart = ({ size, setSelectedSize, frame, setSelectedFrame }) => {
  const { addItem, items, clearCart } = useContext(CartContext)
  console.log('This is items', items)
  //
  let selectedItem
  if (size != null && frame != null) {
    selectedItem = products.filter(
      product => product.size === size && product.frame === frame
    )
  }
  const handleAdd = () => {
    addItem(selectedItem[0])
    setSelectedSize(null)
    setSelectedFrame(null)
  }

  return (
    <>
      <div className="mt-5">
        {size != null && frame != null ? (
          <div>
            <button
              className="border-4 border-green-600 bg-green-400 text-white p-2 mt-3 rounded-md font-serif w-[80%] hover:scale-105 transition-all shadow-md"
              onClick={handleAdd}
            >
              Add To Cart
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </div>
      {items?.length ? (
        <div className="mt-3">
          <p>Your Cart</p>
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-2 shadow-inner shadow-zinc-300 rounded py-1 px-3"
            >
              <p className="text-left">Size: {item.size}</p>
              <p className="text-left text-red-400 font-bold">${item.price}</p>
            </div>
          ))}
          <button onClick={clearCart} className="btn btn-secondary">
            Clear Cart
          </button>
          <Checkout />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Cart
