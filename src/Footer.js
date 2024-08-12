import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} I.T. Buddy. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
