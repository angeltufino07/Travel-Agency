import Header from "./components/Header/index";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Travel from "./components/Travels";
import About from "./components/About_Us";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
     <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/travels" element={<Travel />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;