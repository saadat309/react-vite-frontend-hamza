import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Category from './category.jsx'
import ProductDetails from './productDetails'
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Category/>
    {/* <ProductDetails/> */}

  </StrictMode>,
)
