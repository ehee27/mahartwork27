import { createContext, useEffect, useState } from 'react'

const initialState = {
  cart: [],
}

const setIitialState = () => {
  const existingCart = localStorage.getItem('cart')
  return existingCart ? JSON.parse(existingCart) : initialState
}

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(setIitialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addItem = item => {
    setCart(prev => ({
      ...prev,
      cart: [...prev.cart, item],
    }))
  }
  const clearCart = () => {
    setCart(prev => ({
      ...prev,
      cart: [],
    }))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
