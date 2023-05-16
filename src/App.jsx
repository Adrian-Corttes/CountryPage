import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
//Views
import Home from "./views/Home";
import Contact from "./views/Contact";
//Hooks
import { useState } from 'react';
//Css
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
