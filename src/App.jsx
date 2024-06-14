import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Landing from "./pages/Landing"
import WelcomePage from "./pages/WelcomePage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/welcome" element={< WelcomePage />} />
      </Routes>
    </Router>
  )
}

export default App
