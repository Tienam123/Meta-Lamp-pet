/*Default imports*/
import React from 'react';
import logo from "../../assets/Logo.svg"
import Logo from '../../components/UI/Logo/Logo';
import TextField from '../../components/UI/TextField/TextField';


// Code ..
const Header = () => {
  return (
      <header className="header__container">
        <a href="./index.html"><Logo/></a>
        <h1>Header</h1>
        <TextField/>
      </header>
  );
};

export default Header;