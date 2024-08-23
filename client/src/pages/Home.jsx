import ProductHero from '../components/product/ProductHero'
import ProductOptions from '../components/product/ProductOptions'
import decal from '../assets/decal.jpeg'
import Description from '../components/Description'

const Home = () => {
  return (
    <div className="min-h-screen py-1 px-3 rounded-md">
      <div className="container grid grid-cols-1 md:grid-cols-7 p-3">
        <div className="p-1 md:col-span-4">
          <ProductHero />
        </div>
        <div className="px-2 md:col-span-3">
          <Description />
          <ProductOptions />

          <div className="flex justify-center items-center mt-10">
            <img src={decal} className="h-30 w-[90%]"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
