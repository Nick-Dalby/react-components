import { useState } from 'react'
// import styled from 'styled-components'
import styles from './productImages.module.css'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <section className={`${styles.main} ${styles.section}`}>
      <img src={main.url} alt="main image" className={styles.main} />
      <div className={styles.gallery}>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? `${styles.active}` : null}`}
            />
          )
        })}
      </div>
      <p className={styles.credit}>
        images by <a href="https://unsplash.com/@leladesign">Lea L</a>
      </p>
    </section>
  )
}



export default ProductImages
