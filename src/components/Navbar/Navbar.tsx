import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
            <div className="navbar__content">
                <h1><a href="/">LOGO </a></h1>
                <div className="navbar__content-links">
                    <ul>
                        <li><Link to={'/more'}>More</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
