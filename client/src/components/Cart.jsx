import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
//

const Cart = () => {
  //
  const {
    items,
    addItem,
    clearCart,
    // selectedItem,
    // selectedFrame,
    clearSelections,
  } = useContext(CartContext)
  console.log('This is the cart on cart', items)

  const handleAdd = () => {
    // addItem({ selectedItem, selectedFrame })
    addItem(selectedItem)
    clearSelections()
  }
  return (
    <>
      <div className="mt-5">
        {/* {selectedItem !== null && selectedFrame !== null ? ( */}
        {/* {selectedItem !== null ? (
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

        <div>{!cart.length ? <span></span> : <CartItems cart={cart} />}</div>
      </div>
      {cart?.length ? (
        <CartTotal cart={cart} clearCart={clearCart} />
      ) : (
        <span></span>
      )} */}
      </div>
    </>
  )
}

export default Cart
