import React from 'react'

const CartItems = ({ cart }) => {
  return (
    <div className="flex flex-col mt-10 p-4 bg-zinc-200 rounded shadow shadow-zinc-400 text-left text-black">
      <p className="mb-2">Your cart</p>
      {cart?.map((item, i) => (
        <div
          key={i}
          className="flex gap-2 items-center border-b-2 border-zinc-100 md:w-[90%] py-1 my-1"
        >
          {i + 1}
          <p className="flex text-zinc-600">
            {/* <span className="mr-6">{item.selectedFrame.name}</span> */}
            <span className="text-md mr-2">Size:</span>
            <span className=" text-black mr-4">{item.size}</span>
            {/* <span className="font-bold">
              ${item.selectedItem.price + item.selectedFrame.price}
            </span> */}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CartItems
