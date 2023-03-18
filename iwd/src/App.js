import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Separator from "./components/Separator";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Separator />
      <Services />
      <Programs />
      <Contacts />
    </>
  );
}

export default App;