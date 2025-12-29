import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Soul from "./pages/Soul.jsx";
import Gallery from "./pages/Gallery.jsx";
import Store from "./pages/Store.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";


function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soul" element={<Soul />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
    </>
  );
}

export default App;
