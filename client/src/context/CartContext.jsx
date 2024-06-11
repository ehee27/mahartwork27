import { createContext, useEffect, useState } from 'react'
import { getProductData } from '../productData'

const initialState = {
  cart: [],
}

const setIitialState = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : initialState
}

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(setIitialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts))
  }, [cartProducts])
  //

  const getProductQuantity = id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }

  const addItem = item => {
    setCartProducts(prev => ({
      ...prev,
      cart: [...prev.cart, item],
    }))
  }
  const clearCart = () => {
    setCartProducts(prev => ({
      ...prev,
      cart: [],
    }))
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addItem,
        clearCart,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
