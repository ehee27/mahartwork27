import patWhite from './assets/patWhite.jpeg'
import patColor from './assets/patColor.jpeg'

export const products = [
  {
    id: 'price_1PQFx7DjO58kCqEef0lRLfKl',
    title: 'Mahomes_16x24',
    size: '16 x 24',
    price: 50.0,
    image: patWhite,
  },
  {
    id: 'price_1PQFxeDjO58kCqEe8dRqDg5F',
    title: 'Mahomes_20x30',
    size: '20 x 30',
    price: 100.0,
    image: patColor,
  },
  {
    id: 'price_1PQFyPDjO58kCqEeTvcaTnN1',
    title: 'Mahomes_24x36',
    size: '24 x 36',
    price: 150.0,
    image: patWhite,
  },
]

export const getProductData = id => {
  let productData = products.find(product => product.id === id)

  if (productData == undefined) {
    console.log(`Product does not exist for given ID: + ${id}`)
    return undefined
  }

  return productData
}
