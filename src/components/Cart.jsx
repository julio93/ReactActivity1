import {React, useState, useContext} from "react";
// import Book from "../components/Book";
import { AppContext } from "../AppContext";

function Cart() {

    const { cart, updateQuantity, removeFromCart, calculateTotal } = useContext(AppContext);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2>Carrito</h2>
      {!cart || cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <strong>{item.titulo}</strong> - ${item.precio} x{" "}
                { <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  min="1"
                /> }
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <a href="/pago" variant="light" size="lg">
            Proceder al Pago
          </a>
        </div>
      )}
    </div>
  );
}

export default Cart;