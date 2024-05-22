import { useRef } from 'react'

const options = [
  { id: 0, option: 'Canvas Print' },
  { id: 1, option: 'Framed Canvas' },
  { id: 2, option: 'Framed Print' },
  { id: 3, option: 'Rolled Print' },
]

const ProductType = ({ type, setType, selected, setSelected }) => {
  const selectedRef = useRef()

  const handleSelect = (item) => {
    setSelected(item.id)
    setType(item.option)
    console.log(type)
  }
  return (
    <div className="flex flex-col">
      <p className="text-left mb-3">Product Type</p>
      <div className="flex gap-2">
        {options.map((item, i) => (
          <div
            ref={selectedRef}
            onClick={() => handleSelect(item)}
            className={`border-4 p-2 ${
              selected === item.id ? `bg-zinc-200` : ''
            } hover:cursor-pointer rounded-md shadow-md`}
            key={i}
          >
            <p>{item.option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductType
