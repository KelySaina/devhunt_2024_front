import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Landing from "./pages/Landing"
import { Toaster } from 'react-hot-toast';
import Index from "./pages/admin/Index";
import Service from "./pages/admin/Service";
import Setting from "./pages/admin/Setting";
import ServiceAdd from "./pages/admin/ServiceAdd";
import Documents from "./pages/admin/Documents";
import Super from "./pages/admin/Super";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Index />}>
            <Route path="setting" element={<Setting />} />
            <Route path="" element={<Service />} />
            <Route path="service" element={<ServiceAdd />} />
            <Route path="docs" element={<Documents />} />
            <Route path="super" element={<Super />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
