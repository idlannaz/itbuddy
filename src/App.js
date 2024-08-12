import React from 'react'
import Products from './Products/Products'
import Navbar from './Navbar'
import Footer from './Footer'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Landpage from './landpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'; // Ensure this file contains the necessary flexbox styles

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/abt" element={<Aboutus />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
