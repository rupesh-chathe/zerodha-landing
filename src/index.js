import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css';
import Homepage from './landing _page/home/HomePage';
import Signup from './landing _page/signup/Signup';
import Login from './landing _page/login/Login';
import AboutPage from './landing _page/about/AboutPage';
import ProductPage from './landing _page/product/ProductPage';
import PricingPage from './landing _page/pricing/PricingPage';
import SupportPage from './landing _page/support/SupportPage';
import Navbar from './landing _page/Navbar';
import Footer from './landing _page/Footer';
import NotFound from './landing _page/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    
     <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);


