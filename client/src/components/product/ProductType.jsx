import { sizeIcons } from '../../utils/images'

const ProductType = ({ setType, selected, setSelected }) => {
  const handleSelect = item => {
    setSelected(item.id)
    setType(item.name)
  }
  return (
    <div className="flex flex-col mt-5 bg-white text-white p-3 rounded-md shadow-md shadow-zinc-300">
      <p className="text-left mb-3 text-black/80 text-2xl font-bold font-serif">
        Select Frame
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[100%]">
        {sizeIcons.map((item, i) => (
          <div
            onClick={() => handleSelect(item)}
            className={`flex flex-col justify-center items-center border-4 border-transparent hover:border-yellow-400 hover:cursor-pointer hover:scale-105 transition-all p-1 rounded-md ${
              selected === item.id ? `border-yellow-400` : ''
            }`}
            key={i}
          >
            <img src={item.src} className="h-[80px] w-[90px]"></img>
            <p className="text-black text-xs mt-1">{item.name}</p>
            {/* <button
              onClick={() => handleSelect(item)}
              className={`py-1 px-3 rounded border-4 text-sm my-1 shadow-md shadow-zinc-500 w-[90%] hover:bg-yellow-400 hover:scale-105 transition-all ${
                selected === item.id
                  ? `bg-yellow-400 border-yellow-500 text-white font-black scale-105`
                  : `bg-white text-black`
              }`}
            >
              {item.option}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductType
