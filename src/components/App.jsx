import Header from "./Header"
import Homepage from "./Homepage"
import {Routes, Route} from "react-router-dom"
import "../styles/App.css"

function App() {
  return (
      <main>
        <Header />

        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
  )
}

export default App