import React from 'react';
import "./Main.css"
import pic from "./clientbild.jpg"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { main:"picture" }
    }
    render() { 
        return ( <div className="Main"> <img src ={pic} className="pic"></img></div> );
    }
}
 
export default Main;