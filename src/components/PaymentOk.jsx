import { AppContext } from "../AppContext";
import React, { useContext } from "react";

function PaymentOk() {
    const { clearCart } = useContext(AppContext);

    clearCart()

    return (
      <div>
        <h1>Su pago se ha realizado con exito!</h1>
        <a href="/principal" variant="light" size="lg">Regresar a la Pagina Principal</a>
      </div>
    );
  }
  
  export default PaymentOk;