import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Components:</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <ul>
          <li><NavLink to="/some-page">Some Page</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/another-page">Another Page</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar
