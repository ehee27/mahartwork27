import { useState } from 'react'
import { products } from '../../productData'

const ProductHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1)
  return (
    <div className="flex flex-col justify-center items-center mb-5 text-white px-20">
      <img
        src={products[currentImageIndex].image}
        className="h-[100%] shadow-md shadow-black/80 rounded"
      ></img>
      <div className="flex gap-4 h-[80%] mt-10">
        {products.map((image, i) => (
          <img
            onClick={() => setCurrentImageIndex(i)}
            key={i}
            src={products[i].image}
            className="h-40 w-30 hover:cursor-pointer hover:scale-110 transition-all"
          ></img>
        ))}
        <div className="bg-hero"></div>
      </div>
    </div>
  )
}

export default ProductHero
