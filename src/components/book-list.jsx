import { React, useState, useContext } from "react";
import { sampleBooks } from "../mock-data/books";
import BookCard from "./book-card";
import { AppContext } from "../AppContext";
import { Button,Card } from 'react-bootstrap';
import { useNavigate } from "react-router";

function BookList({ searchTerm }) {
  const { addToCart } = useContext(AppContext);

  console.log("BookList", searchTerm);

  const filteredbooks = sampleBooks.filter((book) =>
    book.titulo.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const navigate = useNavigate();

  const handleCardClick = (book) => {
    console.log("BookList", book);
    navigate(`/libros/${book.id}`);
  };

  return (
    
    <div class="container">
      <h2 className="display-2 text-secondary">Libros mas populares</h2>
      {/* <ul>
        {sampleBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.titulo}</strong> - ${book.precio.toFixed(2)}
            <button onClick={() => addToCart(book)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
      <p>Libros Filtrados</p> */}
      <ul className="list-unstyled justify-content-center d-flex flex-wrap gap-6">
        {filteredbooks.length > 0 ? (
          filteredbooks.map((book) => (
            <BookCard book={book} />
          ))
        ) : (
          <p>No se encontraron libros con la informacion ingresada.</p>
        )}
      </ul>
    </div>
  );
}

export default BookList;
