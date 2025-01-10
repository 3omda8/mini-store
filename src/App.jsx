import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Try from "./pages/Try";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/try" element={<Try />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
