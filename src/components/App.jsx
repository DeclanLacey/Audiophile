import Header from "./Header"
import Homepage from "./Homepage"
import Footer from "./Footer"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"
import Checkout from "./Checkout"
import {Routes, Route} from "react-router-dom"
import { createContext, useState } from "react"
import "../styles/App.css"

const ShoppingCartContext = createContext()
export {ShoppingCartContext}

export default function App() {

  const [shoppingCart, setShoppingCart] = useState([
    {
      "name": "YX1 Wireless Earphones",
      "shortName": "YX1",
      "price": 599,
      "picture": "./assets/product-yx1-earphones/mobile/image-product.jpg",
      "count": 2
    }
    ,
    {
      "name": "XX59 Headphones",
      "shortName": "XX59",
      "price": 899,
      "picture": "./assets/product-xx59-headphones/mobile/image-product.jpg",
      "count": 1
  }
  ])

  return (
    <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart}}>
      <main className="page-container">
        <div className="content-wrap">
          <Header />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/ProductList" element={<ProductList/>} />
            <Route exact path="/ProductList/ProductDetail" element={<ProductDetail/>} />
            <Route exact path="/Checkout" element={<Checkout />}/>
          </Routes>
        </div> 

        <Footer />
      </main>
    </ShoppingCartContext.Provider>
  )
}

