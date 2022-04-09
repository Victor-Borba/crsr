
import Router from './components/Layout/Router'
import './App.css'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'


export default props =>

  <div className='R2d2'>
    <Navbar />
    <div className={`content`}>
      <Router />
    </div>
    <Footer />
  </div>



