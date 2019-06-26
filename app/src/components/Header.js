import React from 'react';
import "./Header.css"
class Header extends React.Component {
    state = { name: "Amal" }
    render() { 
        return ( <div className="Header">
            <div className="left">Logo</div>
            <div className="right">

            <ul >
            <li><a>Home</a></li>
            <li><a>contact</a></li>
            <li><a>aboutus</a></li>
            </ul>
            </div>
          </div> );
    }
}
 
export default Header;