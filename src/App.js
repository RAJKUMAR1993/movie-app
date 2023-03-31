import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Watched" element={<Watched />} />
        <Route path="/WatchList" element={<WatchList />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
