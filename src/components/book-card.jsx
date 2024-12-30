import { useNavigate } from "react-router";
import { Button,Card } from 'react-bootstrap';
import { AppContext } from "../AppContext";
import { React, useState, useContext } from "react";

function BookCard({ book }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);

  const handleCardClick = () => {
    navigate(`/libros/${book.id}`);
  };

  return (
    <>
      <Card  style={{ width: "18rem" }}>
              <Card.Img onClick={handleCardClick} variant="top" src={book.imagen} />
              <Card.Body>
                <strong><Card.Link onClick={handleCardClick}>{book.titulo}</Card.Link></strong>
                <strong><Card.Text>Autor: {book.autor}</Card.Text></strong>
                <Card.Text>{book.resumen}</Card.Text>
                <Card.Text>${book.precio.toFixed(2)}</Card.Text>
              </Card.Body>
              <Button  onClick={() => addToCart(book)}>Agregar al carrito</Button >
            </Card>
      <hr />
    </>
  );
}

export default BookCard;
