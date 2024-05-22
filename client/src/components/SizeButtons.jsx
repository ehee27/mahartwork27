const imageSizes = [
  { id: 0, size: '16"-24"', price: 64.0 },
  { id: 1, size: '20"-30"', price: 92.0 },
  { id: 2, size: '24"-36"', price: 120.0 },
  { id: 3, size: '"32-48"', price: 236.0 },
]

const SizeButtons = ({ setPic, size, setSize, setPrice }) => {
  const handleClick = (item) => {
    setPic(item.id)
    setSize(item.size)
    setPrice(item.price)
  }
  return (
    <div className="flex flex-col mt-5">
      <p className="text-left mb-3">Product Size</p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[100%]">
          {imageSizes.map((item, i) => (
            <button
              onClick={() => handleClick(item)}
              key={i}
              className="border-4 bg-sky-100 py-1 px-3 rounded text-sm my-1 shadow-md"
            >
              {item.size}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SizeButtons
