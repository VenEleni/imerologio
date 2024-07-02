import React, { useState } from "react";
import "./App.css";
import axios from "axios";

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
