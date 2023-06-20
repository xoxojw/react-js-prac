import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Work from "../pages/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        {/* Work => 동적 라우팅 */}
        <Route path="works/:id" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;