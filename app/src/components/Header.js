import React from 'react';
import "./Header.css"
class Header extends React.Component {
    state = { name:"Header" }
    render() { 
        return ( <div className="Header">

<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        </div> );
    }
}
 
export default Header;