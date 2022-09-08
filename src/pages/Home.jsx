import { Link } from 'react-router-dom'
import Title from '../components/title/Title'

const Home = () => {
  return (
    <>
      <Title title={'Home'} />
      <div className="list">
        <Link to="/accordion">Accordion</Link>
        <Link to="/stars">Stars</Link>
        <Link to="/dropdown">Dropdown</Link>
        <Link to="/product-images">Product Image Gallery</Link>
        <Link to="/pagination">Pagination</Link>
        <Link to="/carousels">Carousels</Link>

      </div>
    </>
  )
}
export default Home
