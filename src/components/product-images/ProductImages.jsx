import { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <img src={main.url} alt="main image" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
      <p className="credit">
        images by <a href="https://unsplash.com/@leladesign">Lea L</a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 500px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.2rem;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--light);
  }
  .credit {
    margin-top: 2rem;
    a {
      display: inline;
    }
  }

`

export default ProductImages
