import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { products } from '../../productData'

const SizeButtons = ({ setPic }) => {
  // const { selectedItem, setSelectedItem } = useContext(CartContext)
  const { items, addItem } = useContext(CartContext)
  console.log('This is items SizeButtons', items)

  const handleClick = product => {
    // setSelectedItem(product)
    // setPic(product.id)
    addItem(product)
    // console.log('This is selected', selectedItem)
  }

  return (
    <div className="flex flex-col mt-5 bg-white p-3 rounded-md shadow shadow-zinc-400">
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
              className={`py-1 px-3 rounded border-8 text-sm my-1 shadow-md shadow-zinc-300 w-[100%] mx-1 hover:bg-yellow-400 hover:scale-105 transition-all`}
              // className={`py-1 px-3 rounded border-8 text-sm my-1 shadow-md shadow-zinc-300 w-[100%] mx-1 hover:bg-yellow-400 hover:scale-105 transition-all ${
              //   selectedItem != null && selectedItem.id === product.id
              //     ? `bg-yellow-400 border-yellow-500 text-white font-black scale-105`
              //     : `bg-white text-black`
              // }`}
            >
              {product.size}
            </button>
          ))}
        </div>
        <div className="p-1 mt-3">
          {/* {products.map((product, i) => (
            <button
              key={i}
              id={i}
              onClick={() => handleClick(product)}
              className={`py-1 px-3 rounded border-8 text-sm my-1 shadow-md shadow-zinc-300 w-[100%] mx-1 hover:bg-yellow-400 hover:scale-105 transition-all ${
                selectedItem != null && selectedItem.id === product.id
                  ? `bg-yellow-400 border-yellow-500 text-white font-black scale-105`
                  : `bg-white text-black`
              }`}
            >
              {product.size}
            </button>
          ))}
        </div>
        <div className="p-1 mt-3">
          {selectedItem === null ? (
            <span></span>
          ) : (
            <img
              className="h-[200px] w-[150px] rounded shadow-md"
              src={selectedItem.image}
            ></img>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default SizeButtons
