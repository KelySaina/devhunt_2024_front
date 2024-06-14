import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Landing from "./pages/Landing"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
