import { Link } from 'react-router-dom'
import skeleton from '../../assets/images/tuts-skeleton.gif'
import './Blog.scss'
const Meme = () => {
  return (
    <div className='meme_component'>
        <h1>SIKE!!!</h1>
      <img src={skeleton} alt="skeleton" />
      <Link to={'/blogs'}>Back</Link>
    </div>
  )
}

export default Meme
