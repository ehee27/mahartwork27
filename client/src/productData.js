import pat from './assets/pat.jpeg'

export const products = [
  {
    id: 'price_1PQFx7DjO58kCqEef0lRLfKl',
    title: 'Mahomes_16x24_cp',
    size: '16 x 24',
    frame: 'Canvas Print',
    price: 75.0,
    image: pat,
  },
  {
    id: 'price_1PSJwIDjO58kCqEeSXn18EKT',
    title: 'Mahomes_16x24_fp',
    size: '16 x 24',
    frame: 'Framed Print',
    price: 125.0,
    image: pat,
  },
  {
    id: 'price_1PSJyvDjO58kCqEemP7sqkBL',
    title: 'Mahomes_16x24_fc',
    size: '16 x 24',
    frame: 'Framed Canvas',
    price: 155.0,
    image: pat,
  },
  {
    id: 'price_1PQFyPDjO58kCqEeTvcaTnN1',
    title: 'Mahomes_24x36_cp',
    size: '24 x 36',
    frame: 'Canvas Print',
    price: 125.0,
    image: pat,
  },
  {
    id: 'price_1PSK1bDjO58kCqEevXGGS3os',
    title: 'Mahomes_24x36_fp',
    size: '24 x 36',
    frame: 'Framed Print',
    price: 145.0,
    image: pat,
  },
  {
    id: 'price_1PSK0zDjO58kCqEeIe73Vcqo',
    title: 'Mahomes_24x36_fc',
    size: '24 x 36',
    frame: 'Framed Canvas',
    price: 165.0,
    image: pat,
  },
  {
    id: 'price_1PQFyPDjO58kCqEeTvcaTnN1',
    title: 'Mahomes_32x48_cp',
    size: '32 x 48',
    frame: 'Canvas Print',
    price: 115.0,
    image: pat,
  },
  {
    id: 'price_1PSK3eDjO58kCqEeJilrzF9e',
    title: 'Mahomes_32x48_fp',
    size: '32 x 48',
    frame: 'Framed Print',
    price: 165.0,
    image: pat,
  },
  {
    id: 'price_1PSK36DjO58kCqEeBRQ6xGAj',
    title: 'Mahomes_32x48_fc',
    size: '32 x 48',
    frame: 'Framed Canvas',
    price: 185.0,
    image: pat,
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
