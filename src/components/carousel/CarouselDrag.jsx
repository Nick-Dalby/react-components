import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './carousel.module.css'

const imageUrls = [
  {
    url: 'https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
  },
  {
    url: 'https://images.pexels.com/photos/5677459/pexels-photo-5677459.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
  },
  {
    url: 'https://images.pexels.com/photos/896673/pexels-photo-896673.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
  },
  {
    url: 'https://images.pexels.com/photos/3584430/pexels-photo-3584430.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
  },
  {
    url: 'https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
  },
  {
    url: 'https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
  },
]

const CarouselDrag = () => {
  const [width, setWidth] = useState(0)

  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <p>draggable:</p>
      <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor:'grabbing'}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {imageUrls.map((image, index) => {
            return (
              <motion.div key={index} className={styles.item}>
                <img src={image.url} alt={`sky ${index}`} />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
}
export default CarouselDrag
