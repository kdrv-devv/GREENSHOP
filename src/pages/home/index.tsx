import Footer from "../../components/footer/footer"
import WeatherContainer from "../../components/home-components/weather-container"
import Navbar from "../../components/navbar"

const Home = () => {
  return (
    <>
    <Navbar/>
        <WeatherContainer/>
    <Footer/>
    </>
  )
}

export default Home