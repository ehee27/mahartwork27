import { useEffect } from 'react'
import { frameIcons } from '../../utils/images'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductType = () => {
  const { setSelectedFrame, selectedFrame } = useContext(CartContext)
  //
  const handleSelect = item => {
    setSelectedFrame(item)
    console.log(item)
  }
  //
  useEffect(() => {
    if (selectedFrame != null) {
      setSelectedFrame(selectedFrame)
      console.log(selectedFrame)
    }
  }, [])
  return (
    <div className="flex flex-col mt-5 bg-white text-white p-3 rounded-md shadow shadow-zinc-400">
      <p className="text-left mb-3 text-black/80 text-2xl font-bold font-serif">
        Select Frame
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
        {frameIcons.map((item, i) => (
          <div
            onClick={() => handleSelect(item)}
            className={`flex flex-col justify-center items-center border-4 border-transparent hover:border-yellow-400 hover:cursor-pointer hover:scale-105 transition-all p-1 rounded-md ${
              selectedFrame != null && selectedFrame === item.name
                ? `border-yellow-400`
                : ''
            }`}
            key={i}
          >
            <img src={item.src} className="h-[80px] w-[90px]"></img>
            <p className="text-black text-xs mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductType
