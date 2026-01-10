
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Surah from "./pages/Surah";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:id" element={<Surah />} />
      </Routes>
    </BrowserRouter>
  );
}
