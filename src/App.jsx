import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import styles from "./components/sidenav.module.css";
import Sidenav from "./components/sidenav";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Header />
      <Sidenav />
      <main className={styles.maincontent}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
