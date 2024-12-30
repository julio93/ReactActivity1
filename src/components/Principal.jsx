import { React, useState, useContext } from "react";
import { sampleBooks } from "../mock-data/books";
import BookList from "../components/book-list";
import Footer from "../components/Footer";
import { AppContext } from "../AppContext";

function Principal() {
    const { searchTerm } = useContext(AppContext);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <BookList searchTerm={searchTerm}/>  
      <Footer />
    </div>
  );
}

export default Principal;
