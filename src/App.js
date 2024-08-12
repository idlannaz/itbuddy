import React from 'react'
import Products from './Products/Products'
import { BrowseRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App