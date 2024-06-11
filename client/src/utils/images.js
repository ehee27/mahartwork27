import small from '../assets/small.jpeg'
import medium from '../assets/medium.jpeg'
import large from '../assets/large.jpeg'
import CanvasPrint from '../assets/CanvasPrint.jpeg'
import FramedCanvas from '../assets/FramedCanvas.jpeg'
import FramedPrint from '../assets/FramedPrint.jpeg'
import RolledPrint from '../assets/RolledPrint.jpeg'

export const sizeImages = [
  { id: 1, src: small },
  { id: 2, src: medium },
  { id: 3, src: large },
  { id: 4, src: large },
]

export const sizeIcons = [
  { id: 1, src: CanvasPrint, name: 'Canvas Print' },
  { id: 2, src: FramedCanvas, name: 'Framed Canvas' },
  { id: 3, src: FramedPrint, name: 'Framed Print' },
  { id: 4, src: RolledPrint, name: 'Rolled Print' },
]

export const getImageUrl = filename => {
  return new URL(`/src/assets/${filename}`, import.meta.url).href
}
