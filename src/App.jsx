import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import styles from "./components/sidenav.module.css";
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
      <main className={styles.maincontent}>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
