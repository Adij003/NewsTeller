import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

function App() {
  

  return (
    < >
   <Router>
        <div className="min-h-screen">
          
          <Routes >
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/analytics" element={<Analytics />} />

            <Route path="/profile" element={<Profile />} />


            

            {/* <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      
    </>
  )
}

export default App
