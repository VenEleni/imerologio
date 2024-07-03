import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import Calender from "./components/calender/calender";
import Journals from "./components/journals/journals";



function App() {
  const [msg, setMsg] = useState("");

  const getJournals = async () => {
    try {
      const res = await axios.get("http://localhost:8080/");
      setMsg(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={getJournals}>Check Connection</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
