import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import DetailsOne from "./Pages/Home/DetailsOne";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/pOne" element={<DetailsOne></DetailsOne>}></Route>
        <Route path="/pTwo" element={<DetailsOne></DetailsOne>}></Route>
        <Route path="/pThree" element={<DetailsOne></DetailsOne>}></Route>
      </Routes>
    </div>
  );
}

export default App;
