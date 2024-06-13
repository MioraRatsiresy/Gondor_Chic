
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Login from "./components/accueil/Login";
import ConnectedHome from "./pages/ConnectedHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ConnectedHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
