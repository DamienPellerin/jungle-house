import "../styles/Cart.css";

function Cart() {
  const monstreraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;

  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monstreraPrice}€</li>
        <li>Lierre : {lierrePrice}€</li>
        <li>Bouquet : {bouquetPrice}€</li>
      </ul>

      <p>Total : {monstreraPrice + lierrePrice + bouquetPrice}€</p>
    </div>
  );
}

export default Cart;
