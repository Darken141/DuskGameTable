import React from 'react';
import logo from './DuskLogo.png';
import Particles from 'react-particles-js';
import Table from './components/Table';
import Dashboard from './components/DashBoard';
import './App.css';

const particlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      route: "home"
    }
  }

  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOption}/>
      {
        this.state.route === "admin" ? 
        <Dashboard/>
        :
        <div>
          <img className="logo pt4" src={logo} alt="DuskTillDawn-Logo"/>
          <Table/> 
        </div>
      }
      </div>
    );
  }

}

export default App;
