import { useParams } from "react-router-dom";
import { sampleBooks } from "../mock-data/books";
import BookDetail from "./book-detail";

function BookDetailPage() {
  const { id } = useParams();

  const book = sampleBooks.find((book) => book.id === parseInt(id));

  return book ? <BookDetail book={book}></BookDetail> : <div>No se encontr&oacute; el libro.</div>;
}

export default BookDetailPage;
