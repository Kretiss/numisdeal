import { Link } from 'react-router-dom'
import Coin from '../../assets/categoryProductBox/coin.png'
import PaperMoney from '../../assets/categoryProductBox/paper_money.png'
import Medals from '../../assets/categoryProductBox/medals.png'
import Accessories from '../../assets/categoryProductBox/accessories.png'
import Dots from '../../assets/categoryProductBox/dots.svg'
import OrangeCircle from '../../assets/categoryProductBox/orange_circle.svg'
import GreenCircle from '../../assets/categoryProductBox/green_circle.svg'
import PurpleCircle from '../../assets/categoryProductBox/purple_circle.svg'
import OrangeRectangle from '../../assets/categoryProductBox/orange_rectangle.svg'

type TSubObject = {
  source: string
  classNames: string
}

type TVariants = {
  title: string
  url: string
  image: TSubObject
  graphics: TSubObject
  dots: TSubObject
}[]

const positions = {
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'top-right': 'top-0 right-0',
  'left-center': 'top-1/2 left-0 -translate-y-1/2',
  'right-center': 'top-1/2 right-0 -translate-y-1/2',
  'center-center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-left': 'bottom-0 left-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 ',
  'bottom-right': 'bottom-0 right-0',
}

const specialDotsPositions = {
  'bottom-horizontal': '-bottom-[40%] left-[35%] rotate-90',
  'bottom-left-horizontal': '-bottom-[35%] left-[8%] rotate-90 -scale-x-100',
}

// TODO remove mock data
const variants: TVariants = [
  {
    title: 'Mince',
    url: '#',
    image: {
      source: Coin,
      classNames: positions['center-center'],
    },
    graphics: {
      source: OrangeCircle,
      classNames: positions['bottom-right'],
    },
    dots: {
      source: Dots,
      classNames: positions['top-left'],
    },
  },
  {
    title: 'Bankovky',
    url: '#',
    image: {
      source: PaperMoney,
      classNames: positions['center-center'],
    },
    graphics: {
      source: GreenCircle,
      classNames: positions['top-right'],
    },
    dots: {
      source: Dots,
      classNames: specialDotsPositions['bottom-horizontal'],
    },
  },
  {
    title: 'Medaile',
    url: '#',
    image: {
      source: Medals,
      classNames: positions['top-center'],
    },
    graphics: {
      source: PurpleCircle,
      classNames: positions['bottom-right'],
    },
    dots: {
      source: Dots,
      classNames: positions['top-right'],
    },
  },
  {
    title: 'Příslušenství',
    url: '#',
    image: {
      source: Accessories,
      classNames: positions['center-center'],
    },
    graphics: {
      source: OrangeRectangle,
      classNames: positions['top-right'],
    },
    dots: {
      source: Dots,
      classNames: specialDotsPositions['bottom-left-horizontal'],
    },
  },
]

const CategoryProductBox = () => {
  return (
    <div className="flex justify-between">
      {variants.map((v) => (
        <Link
          to={v.url}
          key={`${v.title}`}
          className="w-64 h-80 flex flex-col items-stretch"
        >
          <div className="h-full relative bg-white overflow-hidden cursor-pointer">
            <img
              src={v.image.source}
              className={`absolute ${v.image.classNames} z-[1]`}
              alt={v.title}
              loading="lazy"
            />
            <img
              src={v.dots.source}
              className={`absolute ${v.dots.classNames}`}
              alt={`${v.title} dots`}
              loading="lazy"
            />
            <img
              src={v.graphics.source}
              className={`absolute ${v.graphics.classNames}`}
              alt={`${v.title} graphics`}
              loading="lazy"
            />
          </div>
          <div className="h-16 flex justify-start items-end font-bold text-2xl">
            {v.title}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryProductBox
