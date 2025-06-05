import Navbar from "./components/Navbar/Navbar"
import Create from "./components/Create/Create"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="bg-gray-200 min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
