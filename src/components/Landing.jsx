import React from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import useUserTimer from "../hooks/useUserTimer";


function Landing() {
  const navigate = useNavigate();

  // Función que se ejecuta al detectar inactividad
  const handleIdle = () => {
    alert("Has estado inactivo. Redirigiendo a la pantalla de inicio...");
    navigate("/principal");
  };

  useUserTimer(5000, handleIdle);

  return (
    <div>
      <h1 className="display-2 text-secondary">Bienvenido a tu Libreria Online</h1>
      <Welcome />
      <Footer />
    </div>
  );
}

export default Landing;
