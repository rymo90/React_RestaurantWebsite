import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header"
import Main from "./components/Main"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" }
  }
  render() { 
    return ( 
      <div className="App">
      <div><Header/></div>
      <div><Main/></div>
      <div><Footer/></div>
      </div>
     );
  }
}
 
export default App;

