const Checkout = ({ size, price, type }) => {
  return (
    <div className="py-1 mt-5">
      <p className="italic">
        <span>{size} Fine Art</span> - <span className="font-bold">{type}</span>
      </p>
      <p className="text-3xl font-bold text-red-500">${price}.00</p>
      <button className="border-4 p-2 mt-3 rounded-md font-serif w-[50%]">
        Checkout
      </button>
    </div>
  )
}

export default Checkout
