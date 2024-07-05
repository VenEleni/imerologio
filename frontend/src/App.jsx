import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import OurCalendar from "./components/calendar/calendar"
import Journals from "./components/journals/journals";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/calendar" element={<OurCalendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
