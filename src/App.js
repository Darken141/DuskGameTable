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
        table: [{
                id: '',
                name: '',
                buyIn: '',
                gameRunning: 0,
                seatsAvailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyIn: '',
                gameRunning: 0,
                seatsAvailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyIn: '',
                gameRunning: 0,
                seatsAvailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyIn: '',
                gameRunning: 0,
                seatsAvailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyIn: '',
                gameRunning: 0,
                seatsAvailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyIn: '',
                gameRunning: 0,
                seatsAvailable: 0,
                waiting: 0
               },
        ]
      }
    }
  }

loadTable = () => {
  setInterval(() => {fetch('http://localhost:3000/', {
            method: 'get'
        })
        .then(response => response.json())
        .then(game => {
            if(game) {
                this.setState({
                  game: 
                    game.game
                })
            }
        })}, 1000)

}

  render() {
    return (
      <div onLoad={this.loadTable} className="App">
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
