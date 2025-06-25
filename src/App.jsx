import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import { productList } from './utils/data'
import ProductGallery from './pages/ProductGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import FinalizePurchase from './pages/FinalizePurchase';
import ProductDetail from './components/ProductDetail';
import Pay from './pages/Pay';
import ProtectedRoutes from './auth/ProtectedRoutes';
import AdminProducts from './pages/AdminProducts';
import Login from './pages/Login';

function App() {

  return (
    <>
        <Routes>
          <Route path="/login" element={
            <Login />
          } />

          <Route path="/" element={
            <Home />
          } />

          <Route path="/products" element={
            <ProductGallery />
          } />

          <Route path="/about" element={
            <About />
          } />

          <Route path="/contact" element={
            <Contact />
          } />

          <Route path="/finalizepurchase" element={
            <FinalizePurchase />
          } />

          <Route path="/products/:id" element={
            <ProductDetail />
          } />

          <Route path="/adminproducts" element={
            <ProtectedRoutes><AdminProducts roleRoute="admin"/></ProtectedRoutes>
          } />

          <Route path="/pay" element={
            <ProtectedRoutes><Pay roleRoute="client"/></ProtectedRoutes>
          } />

          <Route path="*" element={ <NotFound /> } />
        </Routes>
    </>
  )
}

export default App
