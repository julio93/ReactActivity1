// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import { React, useState, useContext } from "react";
import { AppContext } from "../../AppContext";

const Layout = () => {
  const { searchTerm, handleSearch } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={handleSearch}/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
