import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
export default Navbars;




function Navbars() {
  const newNav = () => {
  console.log("Howdi");
}
  return (

        <div ClassName='.myNavbar'>
        <nav id="mainMenu">

<ul>
 <li><a href="src/index.js" >Home</a></li>
 <li><a href="src/travel.js" >Travel</a></li>
  <li><a href="src/street.js" >Street</a></li>
  <li><a href="src/weddings.js" >Weddings</a></li>
  <li><a href="https://www.instagram.com/rob_mcconkey/?hl=en" target="_blank">Instagram</a></li>
  <li><a href="contactme.html">Contact</a></li>
  <li><a href="/Newyork.js">New York</a></li>
  <li><a href="/Paris.js">Paris</a></li>
  <li><a href="London.js">London</a></li>
</ul>
</nav>
         </div>

  )
}
