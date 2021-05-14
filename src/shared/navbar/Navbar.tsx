import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Domov</Link></li>
        <li><Link to="/books">Knihy</Link></li>
        <li><Link to="/orders">Objednávky</Link></li>
        <li><Link to="/teachers">Učitelia</Link></li>
        <li><Link to="/classrooms">Triedy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
