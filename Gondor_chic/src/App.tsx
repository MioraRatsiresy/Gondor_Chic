
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Login from "./components/accueil/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
