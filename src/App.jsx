import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/Home/MainPage";
import { ContactsProvider } from "./context/ContactsContext";

function App() {
  return (
    <ContactsProvider>
        <Navbar />
        <MainPage />
    </ContactsProvider>
  );
}

export default App;
