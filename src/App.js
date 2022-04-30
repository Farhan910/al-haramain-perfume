import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blogs/Blog";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
