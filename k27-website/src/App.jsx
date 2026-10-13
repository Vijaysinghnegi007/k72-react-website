import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import AgencePage from "./pages/AgencePage.jsx";
import Header from "./layout/Header.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/agence" element={<AgencePage />} />
      </Routes>
    </>
  );
};

export default App;
