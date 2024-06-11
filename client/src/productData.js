import patWhite from './assets/patWhite.jpeg'
import patColor from './assets/patColor.jpeg'

export const products = [
  {
    id: 1,
    title: 'Mahomes_16x24',
    size: '16 x 24',
    price: 50.0,
    image: patWhite,
  },
  {
    id: 2,
    title: 'Mahomes_20x30',
    size: '20 x 30',
    price: 100.0,
    image: patColor,
  },
  {
    id: 3,
    title: 'Mahomes_24x36',
    size: '24 x 36',
    price: 150.0,
    image: patWhite,
  },
  // {
  //   id: 4,
  //   title: 'Mahomes_32x48',
  //   size: '32 x 48',
  //   price: 200.0,
  //   image: patColor,
  // },
]

export const getProductData = id => {
  let productData = products.find(product => product.id === id)

  if (productData == undefined) {
    console.log(`Product does not exist for given ID: + ${id}`)
    return undefined
  }

  return productData
}
