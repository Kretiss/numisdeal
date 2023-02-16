import { Helmet } from 'react-helmet-async'
// import { useState } from 'react'
// import { useSpring, animated, config } from '@react-spring/web'
// import HeroPersonAvif from '../assets/homepage_hero_person.avif'
// import HeroPersonWebp from '../assets/homepage_hero_person.webp'
// import HeroPersonJpg from '../assets/homepage_hero_person.jpg'
import CategoryProductBox from '../components/reusableComponents/CategoryProductBox'

const Home = () => {
  // const [heroImageLoaded, setHeroImageLoaded] = useState(false)

  // const [props, api] = useSpring(
  //   () => ({
  //     from: { opacity: 0, transform: 'translate3d(0,20px,0)' },
  //     to: {
  //       opacity: heroImageLoaded ? 1 : 0,
  //       transform: `translate3d(0,${heroImageLoaded ? 0 : 20}px,0)`,
  //     },
  //     config: { ...config.gentle },
  //   }),
  //   [heroImageLoaded]
  // )

  return (
    <>
      <Helmet>
        <title>Numisdeal - homepage</title>
      </Helmet>

      {/* <animated.div style={props} className="bg-white"> */}
      {/*  <picture> */}
      {/*    <source srcSet={HeroPersonAvif} type="image/avif" /> */}
      {/*    <source srcSet={HeroPersonWebp} type="image/webp" /> */}
      {/*    <img */}
      {/*      onLoad={() => setHeroImageLoaded(true)} */}
      {/*      src={HeroPersonJpg} */}
      {/*      width="278px" */}
      {/*      height="380px" */}
      {/*      alt="" */}
      {/*    /> */}
      {/*  </picture> */}
      {/* </animated.div> */}

      <div>
        <div className="wrapper-width mx-auto py-20">
          <h1 className="mb-10">
            Jaké produkty <span className="text-yellow">hledáte</span>?
          </h1>
          <CategoryProductBox />
        </div>
      </div>
    </>
  )
}

export default Home
