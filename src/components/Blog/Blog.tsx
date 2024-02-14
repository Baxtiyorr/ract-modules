import Navbar from "../Navbar/Navbar"
import meme from '../../assets/images/dev-meme.png'
import meme2 from '../../assets/images/memes.jpeg'
import './Blog.scss'
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <div className="container">
      <div className="pics">
        <img src={meme} alt="just meme" />
        <img src={meme2} alt="just meme" />
        <h2><Link to={'./skeleton'}>See more</Link></h2>
      </div>
    </div>
    </>
  )
}

export default Blog
