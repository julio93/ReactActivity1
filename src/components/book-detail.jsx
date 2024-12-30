import { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { ListGroup,Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookDetail({ book }) {
  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Agregado al carrito");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "50rem" }}>
        <Row noGutters>
          {/* Imagen del libro */}
          <Col md={4}>
            <Card.Img
              src={book.imagen}
              alt={book.titulo}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          {/* Detalles del libro */}
          <Col md={8}>
            <Card.Body>
              <Card.Title>{book.titulo}</Card.Title>
              <Card.Text>{book.resumen}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <strong>Autor:</strong> {book.autor}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Precio:</strong> ${book.precio.toFixed(2)}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary" className="me-2" onClick={() => addToCart(book)}>
                Agregar al carrito
              </Button>
              <Button variant="secondary" onClick={() => navigate("/principal")}>
                Regresar
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );

  // return (
  //   <div>
  //     <h1>{book.titulo}</h1>
  //     <p>Autor: {book.autor}</p>
  //     <p>Resumen: {book.resumen}</p>
  //     <p>Precio: {book.precio}</p>
  //     {/* <Button onClick={() => addToCart(book)}>Agregar al carrito</Button> */}
  //     <Button onClick={handleClick}>Agregar al carrito</Button>
  //   </div>
  // );
}

export default BookDetail;
