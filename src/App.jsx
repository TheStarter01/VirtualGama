import './App.css'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>
    <Features/>
    <Workflow/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App
