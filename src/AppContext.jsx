import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const exists = cart.find((item) => item.id === book.id);
    if (exists) {
      console.log(book);
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      console.log(book);
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const updateQuantity = (bookId, quantity) => {
    setCart(
      cart
        .map((item) => (item.id === bookId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        handleSearch,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        calculateTotal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
