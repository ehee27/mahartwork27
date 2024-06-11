import { useState, useRef } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
//
import { products } from '../../productData'

const SizeButtons = ({ setPic, setSize, setPrice }) => {
  const [selected, setSelected] = useState('')
  //

  const handleClick = product => {
    setPic(product.id)
    setSize(product.size)
    setPrice(product.price)
    setSelected(product)
    console.log('This is selected', selected)
  }
  //
  return (
    <div className="flex flex-col mt-5 bg-zinc-200 p-3 rounded-md shadow-md shadow-zinc-300">
      <p className="text-left mb-3 text-black/80 text-2xl font-bold font-serif">
        Select Size
      </p>
      <div className="flex flex-col">
        <div className="flex justify-between">
          {products.map((product, i) => (
            <button
              key={i}
              id={i}
              onClick={() => handleClick(product)}
              className={`py-1 px-3 rounded border-8 border-zinc-100 text-sm my-1 shadow-md shadow-zinc-300 w-[100%] mx-1 hover:bg-yellow-400 hover:scale-105 transition-all ${
                selected.id === product.id
                  ? `bg-yellow-400 border-yellow-500 text-white font-black scale-105`
                  : `bg-white text-black`
              }`}
            >
              {product.size}
            </button>
          ))}
        </div>
        <div className="p-1 mt-3">
          {selected === '' ? (
            <span></span>
          ) : (
            <img
              className="h-[200px] w-[150px] rounded shadow-md"
              src={selected.image}
            ></img>
          )}
        </div>
      </div>
    </div>
  )
}

export default SizeButtons
