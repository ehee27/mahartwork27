import patWhite from '../assets/patWhite.jpeg'
import patSunset from '../assets/patSunset.jpeg'
import patGreen from '../assets/patGreen.jpeg'
import patBlue from '../assets/patBlue.jpeg'
import small from '../assets/small.jpeg'
import medium from '../assets/medium.jpeg'
import large from '../assets/large.jpeg'
import CanvasPrint from '../assets/CanvasPrint.jpeg'
import FramedCanvas from '../assets/FramedCanvas.jpeg'
import FramedPrint from '../assets/FramedPrint.jpeg'
import RolledPrint from '../assets/RolledPrint.jpeg'

export const images = [
  { id: 1, src: patWhite },
  { id: 2, src: patSunset },
  { id: 3, src: patGreen },
  { id: 4, src: patBlue },
  { id: 5, src: small },
  { id: 6, src: medium },
  { id: 7, src: large },
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
