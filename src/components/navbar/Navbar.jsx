import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Components:</h1>
      </Link>
      <nav>
        <ul>
          <li>Dropdown</li>
        </ul>
        <ul>
          <li>Navlink</li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar
