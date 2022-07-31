import './App.css'
import Home from './components/Home'
import "bootswatch/dist/superhero/bootstrap.min.css"
import { HashRouter, Route, Routes } from 'react-router-dom'
import  Navbar  from './components/NavBar'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
