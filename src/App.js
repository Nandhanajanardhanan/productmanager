import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import AddProduct from './components/addproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    
    
<Route path="/navbar" element={<Navbar/>} />
<Route path="/card" element={<Card/>} />
<Route path="/addproduct" element={<AddProduct/>} />

   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
