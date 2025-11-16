import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../src/components/header"
import Home from "../src/pages/home"
import Projects from "../src/pages/projects"
import Resume from "../src/pages/resume"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="p-5">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects/" element={<Projects />} />
            <Route path="resume/" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;