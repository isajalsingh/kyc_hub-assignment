import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navbar';
import Sidebarmenu from './components/Sidebar';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Router>
<div>
      <Navigationbar />
      <Sidebarmenu />
      </div>
    <Routes>
      {/* <Route path="/" element={<Navigate to="/products" />} /> */}
      <Route path="/products" element={<ProductPage />} />
      <Route path="/" element={<ProductPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Router>
);

export default App;