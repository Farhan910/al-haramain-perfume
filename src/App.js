import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blogs/Blog";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Products from "./Components/Products/Products";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
