import Title from "../components/title/Title"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <Title title={'List'} />
    <div className="list">
    <Link to='/accordion'>Accordion</Link>
    <Link to='/stars'>Stars</Link>
    </div>
    </>
  )
}
export default Home