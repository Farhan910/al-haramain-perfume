import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Components/AddItems/AddItem";
import Blog from "./Components/Blogs/Blog";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageItems from "./Components/ManageItems/ManageItems";
import MyItem from "./Components/MyItem/MyItem";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Products from "./Components/Products/Products";
import RequreAuth from "./Components/RequreAuth/RequreAuth";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={
            <RequreAuth>
              <ProductDetail />
            </RequreAuth>
          }
        />
        <Route
          path="/additem"
          element={
            <RequreAuth>
              <AddItem/>
            </RequreAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="manageitems" element={<ManageItems />} />
        <Route path="/myitem" element={<MyItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
