import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../components/Pages/HomePage"
import More from "../components/More/More"
import Contact from "../components/Contact/Contact"
import Blog from "../components/Blog/Blog"
import Register from "../components/Register/Register"
import Navbar from "../components/Navbar/Navbar"
import Meme from "../components/Blog/Meme"
import MovieDetail from "../components/MovieDetail/MovieDetail"

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/more" element={<More/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/blogs/skeleton" element={<Meme/>}/>
      <Route path="/movie/:movieId" element={<MovieDetail/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
