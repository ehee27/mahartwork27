import ProductHero from '../components/product/ProductHero'
// import ProductType from '../components/product/ProductType'
import SizeButtons from '../components/product/SizeButtons'
import { useState } from 'react'
import Checkout from '../components/Checkout'
import Cart from '../components/Cart'
import decal from '../assets/decal.jpeg'
import Description from '../components/Description'

const Home = () => {
  // const [heroPic, setHeroPic] = useState(0)
  const [size, setSize] = useState(null)
  const [type, setType] = useState(null)
  const [price, setPrice] = useState(null)
  return (
    <div className="min-h-screen border-8 py-1 px-3 rounded-md">
      <div className="container grid grid-cols-1 md:grid-cols-7 p-3">
        <div className="p-1 md:col-span-4">
          <ProductHero />
        </div>
        <div className="px-2 md:col-span-3">
          <Description />

          <SizeButtons />
          {/* <ProductType /> */}
          <Cart type={type} size={size} price={price} />

          <Checkout />

          <div className="flex justify-center items-center mt-10">
            <img src={decal} className="h-30 w-[90%]"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
