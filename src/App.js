import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route exact path="/" element={user ? <SearchPage /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
