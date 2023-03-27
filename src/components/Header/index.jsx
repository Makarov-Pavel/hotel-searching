import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

function Header() {
  const navigate = useNavigate()

  const exitClickHandler = () => {
    sessionStorage.setItem('loggedIn','false')
    navigate('/Login')
  }
  
  return (
    <header className="header">
      <h2 className="header__logo">Simple Hotel Check</h2>
      <div className="header__exit">
        <span onClick={()=>exitClickHandler()}>
          Выйти
        </span>
        <img src="images/exit_icon.svg" alt="exit"/>
      </div>
      
    </header>
  );
}

export default Header;
