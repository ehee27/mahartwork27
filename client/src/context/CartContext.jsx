import { createContext, useEffect, useState } from 'react'

const initialState = {
  cart: [],
  selectedItem: null,
  // frame: null,
}

// SET INITIAL STATE VALUES -----------------
const setInitialCart = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}
const setInitialItem = () => {
  const selectedItem = localStorage.getItem('selectedItem')
  return selectedItem ? JSON.parse(selectedItem) : initialState.selectedItem
}
// const setInitialFrame = () => {
//   const frame = localStorage.getItem('frame')
//   return frame ? JSON.parse(frame) : initialState.frame
// }

// CONTEXT ----------------------
export const CartContext = createContext()
// PROVIDER
export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(setInitialCart)
  //
  // const [selectedItem, setSelected] = useState(setInitialItem)
  // const [selectedFrame, setFrame] = useState(setInitialFrame)

  // SET LOCAL STORAGE ON MOUNT ----------------
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts))
    // localStorage.setItem('selectedItem', JSON.stringify(selectedItem))
    // localStorage.setItem('frame', JSON.stringify(selectedFrame))
  }, [cartProducts])

  // GET QUANTITY ------------------
  const getProductQuantity = id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }

  // ADD ITEM TO CART --------
  const addItem = item => {
    setCartProducts([...cartProducts, item])
  }
  // CLEAR CART ---------
  const clearCart = () => {
    setCartProducts(prev => ({
      ...prev,
      cart: [],
    }))
  }

  // SET SELECTED ITEM from size buttons ---------------
  // const setSelectedItem = item => {
  //   setSelected(item)
  // }
  // SET SELECTED FRAME -----------------------
  // const setSelectedFrame = item => {
  //   setFrame(item)
  // }
  // CLEAR SELECTIONS
  // const clearSelections = () => {
  //   setSelected(null)
  //   // setFrame(null)
  // }

  return (
    <CartContext.Provider
      value={{
        items: cartProducts,
        addItem,
        clearCart,
        getProductQuantity,
        // selectedItem,
        // setSelectedItem,
        // selectedFrame,
        // setSelectedFrame,
        // clearSelections,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
