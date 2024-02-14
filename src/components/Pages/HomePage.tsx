import GetMovie from "../Movies/GetMovie"
import Navbar from "../Navbar/Navbar"


const HomePage = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <GetMovie/>
      </main>
    </>
  )
}

export default HomePage
