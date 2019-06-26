import React from 'react';
import  Header from "./components/Header"
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" }
  }
  render() { 
    return ( 
      <div className="App">
      <div><Header /></div>
      <div><Main /></div>
      <div><Footer/></div>
      </div>
     );
  }
}
 
export default App;

