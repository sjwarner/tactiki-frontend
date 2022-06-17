import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Footer from "./general/components/Footer/Footer";
import Header from "./general/components/Header/Header";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<div>Foobar</div>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
