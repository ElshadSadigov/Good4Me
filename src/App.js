
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
// import Register from "./pages/Register";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>    
    </div>
  );
}

export default App;
