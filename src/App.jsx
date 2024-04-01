import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Home from "./pages/home";
import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Sidenav />
      <main className='lg:ml-[250px] lg:flex-auto p-[15px]'>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
