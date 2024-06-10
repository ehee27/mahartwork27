import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { images } from '../utils/images'

const imageSizes = [
  { id: 0, size: '16 x 24', price: 64.5 },
  { id: 1, size: '20 x 30', price: 92.0 },
  { id: 2, size: '24 x 36', price: 120.5 },
  { id: 3, size: '32 x 48', price: 236.0 },
]

const sizeImages = images.slice(4)

const SizeButtons = ({ setPic, setSize, setPrice }) => {
  const { frameSize, selectSize } = useContext(CartContext)
  const [selected, setSelected] = useState('')
  const [selectedSize, setSelectedSize] = useState(0)
  console.log('This is FS', frameSize)
  console.log('This is sizeImages', sizeImages)
  //
  const handleClick = item => {
    setPic(item.id)
    setSize(item.size)
    setPrice(item.price)
    setSelected(item.id)
    setSelectedSize(item.id)
    console.log('This is the id', item.id)
  }
  return (
    <div className="flex flex-col mt-5 bg-zinc-400 p-3 rounded shadow-inner shadow-zinc-800">
      <p className="text-left mb-3 text-white text-xl font-bold font-serif">
        Select Size
      </p>
      <div className="flex flex-col">
        <div className="flex justify-between">
          {imageSizes.map((item, i) => (
            <button
              key={i}
              id={i}
              onClick={() => handleClick(item)}
              className={`py-1 px-3 rounded border-4 text-sm my-1 shadow-md shadow-zinc-500 w-[100%] mx-1 hover:bg-yellow-400 hover:scale-105 transition-all ${
                selected === item.id
                  ? `bg-yellow-400 border-yellow-500 text-white font-black scale-105`
                  : `bg-white text-black`
              }`}
            >
              {item.size}
            </button>
          ))}
        </div>
        <div className="p-1 mt-3">
          <img
            className="h-100 w-100 rounded-md shadow-md shadow-black/90"
            src={sizeImages[selectedSize].src}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default SizeButtons
