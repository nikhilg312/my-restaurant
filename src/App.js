import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About'
import React, { useState } from 'react'
import Menu from './pages/Menu';
import Cart from './pages/Cart';
function App() {
    const [cartItems, setCartItems] = useState(null);
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route index element={<Home />} />
                            <Route path='/menu' element={<Menu setCartItems = {setCartItems}/>} />
                            <Route path='/about' element={<About />} />
                            <Route path='/cart' element={<Cart setCartItems = {setCartItems} cartItems = {cartItems}/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        );
}

export default App;
