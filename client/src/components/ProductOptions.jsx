import ProductType from './ProductType'
import SizeButtons from './SizeButtons'

const ProductOptions = ({
  setType,
  selected,
  setSelected,
  setPic,
  setSize,
  setPrice,
}) => {
  return (
    <>
      <ProductType
        setType={setType}
        selected={selected}
        setSelected={setSelected}
      />
      <SizeButtons setPic={setPic} setSize={setSize} setPrice={setPrice} />
    </>
  )
}

export default ProductOptions
