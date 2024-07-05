import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import Calender from "./components/calender/calender";
import Journals from "./components/journals/journals";
import Header from "./components/Header";
import ChangePassword from "./components/changePassword/changePassword";
import ChangeName from "./components/changeName/changeName";
import NewJournal from "./components/newJournal/newJournal";



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/changeName" element={<ChangeName />} />
        <Route path="/newJournal" element={<NewJournal />} />
      </Routes>
    </div>
  );
}

export default App;
