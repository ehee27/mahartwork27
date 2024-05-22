import './App.css'
import ProductHero from './components/ProductHero'
import Navbar from './components/Navbar'
import ProductType from './components/ProductType'
import SizeButtons from './components/SizeButtons'
import { useState } from 'react'
import Checkout from './components/Checkout'
import decal from './assets/decal.jpeg'

function App() {
  const [heroPic, setHeroPic] = useState(0)
  const [selected, setSelected] = useState('')
  const [size, setSize] = useState(null)
  const [type, setType] = useState(null)
  const [price, setPrice] = useState(null)
  return (
    <>
      <Navbar />
      <div className="container border-4 rounded p-3">
        <div className="container grid grid-cols-1 md:grid-cols-2 p-3">
          <div className="p-1">
            <ProductHero heroPic={heroPic} setHeroPic={setHeroPic} />
          </div>
          <div className="p-1">
            <ProductType
              setType={setType}
              selected={selected}
              setSelected={setSelected}
            />
            <SizeButtons
              setPic={setHeroPic}
              size={size}
              setSize={setSize}
              setPrice={setPrice}
            />
            <Checkout size={size} price={price} type={type} />
            <div className="flex justify-center items-center mt-10">
              <img src={decal} className="h-30 w-[90%]"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
