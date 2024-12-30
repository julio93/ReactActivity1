import {React, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const {cart} = useContext(AppContext);

  //const cartLenght = cart.length; 

  const handleInputChange = (e) => {
    // console.log(e);
    setInputValue((prev) => e.target.value);
    onSearch(e.target.value); // Llama a la función onSearch del padre
  };

  console.log(cart.length)

  const menuItems = [
    { text: "Principal", to: "/principal" },
    { text: `Carrito(${cart.length})`, to: "/carrito" },
  ];

  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand name */}
          <Link to="/" className="font-bold text-xl">
            Relatos de Papel
          </Link>

          {/* Desktop menu */}
          <input
            className="text-zinc-600 border border-zinc-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            type="text"
            placeholder="Buscar libros por titulo..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.to}
                className="hover:text-gray-300"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.to}
                className="block py-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
