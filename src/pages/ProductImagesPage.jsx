import ProductImages from '../components/product-images/ProductImages'
import Title from '../components/title/Title'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1604935067269-27c7e8b36618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1604782814592-a9063b3f9025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1604782666037-3c63d50052db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
  },
]

const ProductImagesPage = () => {
  return (
    <>
      <Title title={'Product Image Gallery'} />

      <ProductImages images={images} />
    </>
  )
}

export default ProductImagesPage
