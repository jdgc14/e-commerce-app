import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import CreateUser from './components/CreateUser';
import MainLayout from './components/MainLayout';
import User from './components/User';
import UserPurchases from './components/UserPurchases';
import { useDispatch } from 'react-redux';
import { setUser } from './store/slices/user.slice';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch()

  dispatch(setUser(JSON.parse(window.localStorage.getItem('user'))))

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
          <Route element={<MainLayout />}>
            <Route path='/user' element={<User />} />
            {/* <Route path='/cart' element={<UserShoppingCart />} /> */}
            <Route path='/purchases' element={<UserPurchases />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
