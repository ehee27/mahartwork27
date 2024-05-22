import { images } from '../utils/images'

const ProductHero = ({ heroPic }) => {
  return (
    <div className="p-2">
      <div className="flex flex-col justify-center items-center animate-slidedown300 mb-5">
        <img
          src={images[`${heroPic}`].src}
          className="h-80 w-[50] shadow-md shadow-zinc-500"
        ></img>
        <div className="flex flex-col gap-2 text-left my-10">
          <p>
            Thanks for stopping by. This piece was inspired by a passion for
            Chiefs Kingdom, civic pride in our great growing city, and a love of
            "beat em up video games" from the 90's.
          </p>
          <p>
            It would look super cool hanging in your media room, office or man
            cave.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductHero
