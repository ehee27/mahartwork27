import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex items-center bg-black shadow-md text-white h-20 border-b-8 border-b-zinc-600">
      <div className="p-5">
        <Link className="text-3xl font-serif font-bold" to="/">
          Mahartwork
        </Link>
        {/* <p className="text-xs">Custom KC Artwork</p> */}
      </div>
    </div>
  )
}

export default Navbar
