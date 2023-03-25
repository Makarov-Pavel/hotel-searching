import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

function Header() {
  const navigate = useNavigate()
  
  return (
    <header className="header">
      <h2 className="header__logo">Simple Hotel Check</h2>
      <span className="header__exit" onClick={()=>navigate('/Login')}>Выйти <img src="images/exit-icon.svg"/></span>
    </header>
  );
}

export default Header;
