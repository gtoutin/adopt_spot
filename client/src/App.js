import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Pets from "./components/Pets";
import ContactForm from "./components/ContactForm";
import RulesAndRegulations from "./components/RulesAndRegulations";

import './components/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
