import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Receipt from "./pages/receipt/Receipt";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/receipt" element={<Receipt />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
