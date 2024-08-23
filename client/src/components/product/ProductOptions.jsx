// Select SIZE and FRAME - pass those to cart
import { useState } from 'react'
import { sizes, frames } from '../../utils/images'
import Cart from '../Cart'

const ProductOptions = () => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedFrame, setSelectedFrame] = useState(null)
  const handleSize = product => {
    setSelectedSize(product.size)
    console.log('Selected Size', selectedSize)
  }
  const handleFrame = frame => {
    setSelectedFrame(frame.name)
    console.log('Selected Frame', selectedFrame)
  }

  return (
    <>
      {/* // SIZE --------- */}
      <div className="flex flex-col mt-5 bg-white p-3 rounded-md shadow shadow-zinc-400">
        <p className="text-left mb-3 text-black/80 text-2xl font-bold font-serif">
          Select Size
        </p>
        <div className="flex flex-col">
          <div className="flex justify-between">
            {sizes.map((size, i) => (
              <button
                key={i}
                id={i}
                onClick={() => handleSize(size)}
                className={`btn btn-primary rounded border-4 text-sm my-1 shadow-md shadow-zinc-300 hover:border-yellow-300 hover:scale-105 transition-all ${
                  selectedSize != null && selectedSize === size.size
                    ? `border-yellow-300 bg-yellow-500 text-white`
                    : ''
                }`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* // FRAME --------- */}
      <div className="flex flex-col mt-5 bg-white p-3 rounded-md shadow shadow-zinc-400">
        <p className="text-left mb-3 text-black/80 text-2xl font-bold font-serif">
          Select Frame
        </p>
        <div className="flex flex-col">
          <div className="flex justify-between">
            {frames.map((frame, i) => (
              <div
                key={i}
                id={i}
                onClick={() => handleFrame(frame)}
                className={`flex flex-col justify-center items-center border-4 border-transparent hover:border-yellow-300 hover:cursor-pointer hover:scale-105 transition-all p-1 rounded-md ${
                  selectedFrame != null && selectedFrame === frame.name
                    ? `border-yellow-400`
                    : ''
                }`}
              >
                <img src={frame.src} className="h-[80px] w-[90px]"></img>
                <p className="text-black text-xs mt-1">{frame.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedSize != null && selectedFrame != null ? (
        <Cart
          size={selectedSize}
          setSelectedSize={setSelectedSize}
          frame={selectedFrame}
          setSelectedFrame={setSelectedFrame}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default ProductOptions
