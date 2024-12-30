import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>
            Somos una librería comprometida con ofrecer los mejores libros para
            todas las edades y gustos. Encuentra tu próxima aventura literaria.
          </p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>Email: soporte@libreria.com</p>
          <p>Teléfono: +593 999 999 999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Librería Online. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;