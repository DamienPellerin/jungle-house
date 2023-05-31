import "../styles/Cart.css";
import { useState } from "react";

function Cart() {
  const monstreraPrice = 8;
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monstreraPrice}€</li>
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </ul>
      <button onClick={() => updateCart(0)}>Vider le panier</button>

      <p>Total : {monstreraPrice * cart}€</p>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  );
}

export default Cart;
