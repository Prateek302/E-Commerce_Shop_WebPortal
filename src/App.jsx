import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Disclaimer from "./pages/Disclaimer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;