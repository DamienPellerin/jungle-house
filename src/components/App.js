import Banner from "./Banner.js";
import Cart from "./Cart.js";
import ShoppingList from "./ShoppingList.js";
import Footer from "./Footer.js";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div className="App">
      <Banner />
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      <Footer />
    </div>
  );
}

export default App;
