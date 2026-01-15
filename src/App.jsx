import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import DatacontextProvider from "./store/Usercontext";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

function App() {
 
  return (
    <DatacontextProvider>
      <Home />
      <ToastContainer />
    </DatacontextProvider>
  );
}

export default App;
