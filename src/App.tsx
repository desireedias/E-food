import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Footer from './Footer'
import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Footer />
        <Cart />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
