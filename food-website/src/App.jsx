import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadCard from "./components/HeadCard";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadCard />
      <Food />
      <Category />
    </>
  );
}

export default App;
