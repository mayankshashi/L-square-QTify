import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        image="https://png.pngtree.com/png-clipart/20210829/original/pngtree-music-album-cover-modern-style-color-sns-png-image_6664686.jpg"
        follows={100}
        title={"Abstract"}
      />
    </>
  );
}

export default App;
