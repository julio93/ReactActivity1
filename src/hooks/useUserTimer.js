import { useEffect } from "react";

function useUserTimer(timeout, onIdle) {
  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(onIdle, timeout);
    };

    // Escuchar eventos de actividad
    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Iniciar el temporizador al montar el componente
    resetTimer();

    // Limpieza al desmontar
    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [timeout, onIdle]);
}

export default useUserTimer;