import "./App.css";
import Header from "./header/header";
import Home from "./home/home";
import WhatIDo from "./what-i-do/what-i-do";
import Footer from "./home/footer";
import Bio from "./bio/bio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./home/home.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-I-do" element={<WhatIDo />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
