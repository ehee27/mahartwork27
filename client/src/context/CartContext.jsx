// We're utilizing getProductQuantity(), 'addItem' calls this initially to get value and adjust accordingly
// NOTE the addItem logic for 'quantity'
import { createContext, useEffect, useState } from 'react'

const initialState = {
  cart: [],
}

// SET INITIAL STATE VALUES -----------------
const setInitialCart = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : initialState.cart
}

// CONTEXT ----------------------
export const CartContext = createContext()

// PROVIDER
export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(setInitialCart)
  //

  // SET LOCAL STORAGE ON MOUNT ----------------
  useEffect(() => {
    return () => {
      localStorage.setItem('cart', JSON.stringify(cartProducts))
    }
    // localStorage.setItem('cart', JSON.stringify(cartProducts))
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
    const quantity = getProductQuantity(item.id)
    //
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: item.id,
          quantity: 1,
          title: item.title,
          size: item.size,
          frame: item.frame,
          price: item.price,
          image: item.image,
        },
      ])
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
    }
  }
  // CLEAR CART ---------
  const clearCart = () => {
    setCartProducts(prev => ({
      ...prev,
      cart: [],
    }))
  }

  return (
    <CartContext.Provider
      value={{
        items: cartProducts,
        addItem,
        clearCart,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
