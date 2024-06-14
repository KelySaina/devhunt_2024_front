import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Registration from "./pages/Registration"
function App() {
  return (
    <Router>
      <Routes>
       <Route path="/register" element={<Registration/>}/> 
      </Routes>
    </Router>
  )
}

export default App
