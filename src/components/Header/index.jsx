import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

function Header() {
  const navigate = useNavigate()
  
  return (
    <header className="header">
      <h2 className="header__logo">Simple Hotel Check</h2>
      <div className="header__exit">
        <span onClick={()=>navigate('/Login')}>
          Выйти
        </span>
        <img src="images/exit-icon.svg"/>
      </div>
      
    </header>
  );
}

export default Header;
