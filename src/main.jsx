import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import SignleProduct from './pages/SignleProduct.jsx'
import Cart from './pages/Cart.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ProductContext from './context/Context.jsx'
import ProductProvider from './context/ProductContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='products' element = {<Products />} />
      <Route path='singleproduct/:id' element = {<SignleProduct />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='cart' element = {<Cart />} />
      <Route path='*' element = {<ErrorPage />} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
        <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>,
)
