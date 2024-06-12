import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
const Checkout = () => {
  const { items } = useContext(CartContext)
  console.log('This is the cart on Checkout', items)
  //
  // CHECKOUT CALLS A FETCH and POSTS the cart
  const checkout = async () => {
    await fetch('http://localhost:3500/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: items }),
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.url) {
          window.location.assign(res.url)
        }
      })
  }

  return (
    <div className="py-1 mt-5">
      <button
        onClick={checkout}
        className="border-4 p-2 mt-3 rounded-md font-serif w-[50%]"
      >
        Checkout
      </button>
    </div>
  )
}

export default Checkout
