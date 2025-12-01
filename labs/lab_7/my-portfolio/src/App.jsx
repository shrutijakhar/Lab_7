// src/App.jsx
import React, { useState, useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from "./pages/Projects";
import Messages from './pages/Messages';
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="container my-5" role="main">
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/messages" element={<Messages />} />
  <Route path="*" element={<NotFound />} />  {/* always last */}
</Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
