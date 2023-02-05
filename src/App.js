import Navbar from "./Navbar"
import Buy from "./pages/Buy"
import Orders from "./pages/Orders"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"


// The Drugstore App
function App() {
  return (
    <div>
      <Navbar />

      <div className="container">

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>

        {/* Footer */}
        <footer style={{"text-align": "center"}}>
          Made by Michael Wang in React
        </footer>

      </div>
    </div>
  )
}



export default App;
