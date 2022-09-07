import { Link } from 'react-router-dom'
import Title from '../components/title/Title'

const PaginationPage = () => {
  return (
    <>
      <Title title={'Pagination'} />
      <div className="list">
        <Link to="/pagination-hooks">Pagination using hooks</Link>
        <Link to="/pagination-query">Pagination using react-query</Link>
      </div>
    </>
  )
}

export default PaginationPage
