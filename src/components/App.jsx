import Header from "./Header"
import Homepage from "./Homepage"
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom"
import "../styles/App.css"

function App() {
  return (
      <main className="page-container">
        <div className="content-wrap">
          <Header />

          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div> 

        <Footer />
      </main>
  )
}

export default App