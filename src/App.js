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
      isLogginIn: false,
      game: {
        holdem1: {
          name: 'NHLE 1/1',
          buyIn: '£50',
          gameRunning: 0,
          seatsAvailable: 8,
          waiting: 0
        },
        holdem2: {
          name: 'NHLE 1/2',
          buyIn: '£100',
          gameRunning: 0,
          seatsAvailable: 8,
          waiting: 0
        },
        plo1: {
          name: 'PLO 1/1/2',
          buyIn: '£100',
          gameRunning: 0,
          seatsAvailable: 8,
          waiting: 0
        },
        plo2: {
          name: 'PLO 2/2/5',
          buyIn: '£200',
          gameRunning: 0,
          seatsAvailable: 8,
          waiting: 0
        },
        dc1: {
          name: 'Dealer Choice 1/1',
          buyIn: '£100',
          gameRunning: 0,
          seatsAvailable: 8,
          waiting: 0
        },
        dc2: {
          name: 'Dealer Choice 2/2',
          buyIn: '£200',
          gameRunning: 0,
          seatsAvailable: 8,
          waiting: 0
        }
      }
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
          <Table table={this.state.game}/> 
        </div>
      }
      </div>
    );
  }

}

export default App;
