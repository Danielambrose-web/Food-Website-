
import Navbar from "./components/Navbar/Navbar"
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

const App = () => {
  return (
    <div className="app">
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Cart' element ={<Cart/>}/>
      <Route path ='./PlaceOrder' element = {<PlaceOrder/>}/>
     </Routes>
    </div>
  )
}

export default App
