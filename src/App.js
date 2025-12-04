/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { ProductsContext } from "./contexts/ProductsContext";
import { products } from "./assets/productsContent";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { storedItemsFromLocal } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = JSON.parse(localStorage.getItem("cartItems"));

      dispatch(storedItemsFromLocal(storedItems));
    }
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </ProductsContext.Provider>
  );
}

export default App;
