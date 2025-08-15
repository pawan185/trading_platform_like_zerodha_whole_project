import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route ,Routes } from 'react-router-dom'; 
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import Aboutpage  from './landing_page/about/Aboutpage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Aboutpage' element={<Aboutpage />} />
      <Route path='/ProductsPage' element={<ProductsPage />} />
      <Route path='/PricingPage' element={<PricingPage />} />
      <Route path='/SupportPage' element={<SupportPage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


