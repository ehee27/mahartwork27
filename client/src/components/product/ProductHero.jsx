import { useState } from 'react'
import { products } from '../../productData'

const ProductHero = ({ heroPic }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1)
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center animate-slidedown300 mb-5 bg-black/90 text-white p-5 rounded pt-10">
        <img
          // src={images[`${heroPic}`].src}
          src={products[currentImageIndex].image}
          className="h-100 md:h-[600px] shadow-xl shadow-black rounded"
        ></img>
        <div className="flex gap-4 h-[400px] max-w-[600px] mt-10">
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
    </div>
  )
}

export default ProductHero