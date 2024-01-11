import Header from "./Header"
import Homepage from "./Homepage"
import Footer from "./Footer"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"
import {Routes, Route} from "react-router-dom"
import { createContext, useState } from "react"
import "../styles/App.css"

const ShoppingCartContext = createContext()
export {ShoppingCartContext}

export default function App() {

  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart}}>
      <main className="page-container">
        <div className="content-wrap">
          <Header />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/ProductList" element={<ProductList/>} />
            <Route exact path="/ProductList/ProductDetail" element={<ProductDetail/>} />
          </Routes>
        </div> 

        <Footer />
      </main>
    </ShoppingCartContext.Provider>
  )
}

