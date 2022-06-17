import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./general/components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import LocalMultiplayerPage from "./pages/LocalMultiplayer/LocalMultiplayerPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Footer from "./general/components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route
              path="/local-multiplayer"
              element={<LocalMultiplayerPage />}
            />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
