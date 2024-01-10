import Header from "./Header"
import Homepage from "./Homepage"
import Footer from "./Footer"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"
import {Routes, Route} from "react-router-dom"
import "../styles/App.css"

function App() {
  return (
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
  )
}

export default App