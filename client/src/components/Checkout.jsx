const Checkout = ({ cart }) => {
  const checkout = async () => {
    await fetch('http://localhost:3500/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart }),
    })
  }
  return (
    <div className="py-1 mt-5">
      <button
        onClick={checkout}
        className="border-4 p-2 mt-3 rounded-md font-serif w-[50%]"
      >
        Checkout
      </button>
    </div>
  )
}

export default Checkout
