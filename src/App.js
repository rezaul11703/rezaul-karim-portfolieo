import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import DetailsOne from "./Pages/Home/DetailsOne";
import DetailsTwo from "./Pages/Home/DetailsTwo";
import DetailsThree from "./Pages/Home/DetailsThree";
import AboutMe from "./Pages/Home/AboutMe";
import Footer from "./Pages/Shared/Footer";
import Four from "./Pages/404/Four";
import Blogs from "./Pages/Home/Blogs";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/pOne" element={<DetailsOne></DetailsOne>}></Route>
        <Route path="/pTwo" element={<DetailsTwo></DetailsTwo>}></Route>
        <Route path="/pThree" element={<DetailsThree></DetailsThree>}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<Four></Four>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
