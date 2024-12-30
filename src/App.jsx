import { useState } from 'react'
import reactLogo from './assets/RelatosDePapelLogo.png'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Principal from "./components/Principal.jsx";
import Landing from "./components/Landing.jsx";
import Cart from "./components/Cart.jsx";
//import Navbar from "../components/Navbar";
import BookDetailPage from "./components/book-detail-page.jsx";
import Layout from "./components/common/Layout.jsx";
import Pago from "./components/PaymentOk.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/libros/:id" element={<BookDetailPage />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/pago" element={<Pago />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
