import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useDispatch } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { setUser } from './store/slices/user.slice'

import { Home, Login, CreateUser, User, UserPurchases, ProductDetails } from './pages'
import {Footer, Header, MainLayout} from './components'

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
