import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BasPage from "./components/BasPage";
import ContactUs from "./components/pages/ContactUs";
import Cost from "./components/pages/Cost";
import Blog from "./components/pages/Blog";
import Stuff from "./components/pages/Stuff";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning-tarifs" element={<Cost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nos-activites" element={<Stuff />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <BasPage />
    </div>
  );
}

export default App;
