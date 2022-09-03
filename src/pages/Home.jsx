import Title from "../components/title/Title"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <Title title={'List'} />
    <Link to='/accordion'>Accordion</Link>
    </>
  )
}
export default Home