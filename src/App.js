import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
