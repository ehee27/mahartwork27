import { useState } from 'react'
import { products } from '../../productData'

const ProductHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1)
  return (
    <div className="flex flex-col justify-center items-center mb-5 text-white px-10">
      <img
        src={products[currentImageIndex].image}
        className="h-[100%] shadow-md shadow-black/80 rounded"
      ></img>
      <div className="flex gap-4 h-[80%]  w-[100%] overflow-x-scroll mt-10">
        {products.map((image, i) => (
          <img
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            src={products[i].image}
            className="h-[100%] w-[30%] hover:cursor-pointer transition-all"
          ></img>
        ))}
        <div className="bg-hero"></div>
      </div>
    </div>
  )
}

export default ProductHero
