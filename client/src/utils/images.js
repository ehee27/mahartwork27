import city from '../assets/city.jpeg'
import noCity from '../assets/noCity.jpeg'
import michael from '../assets/michael.jpg'

export const images = [
  { id: 1, src: city },
  { id: 2, src: noCity },
  { id: 3, src: michael },
  { id: 4, src: city },
]

export const getImageUrl = (filename) => {
  return new URL(`/src/assets/${filename}`, import.meta.url).href
}
