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
      game: [{
                id: '',
                name: '',
                buyin: '',
                gamerunning: 0,
                seatsavailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyin: '',
                gamerunning: 0,
                seatsavailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyin: '',
                gamerunning: 0,
                seatsavailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyin: '',
                gamerunning: 0,
                seatsavailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyin: '',
                gamerunning: 0,
                seatsavailable: 0,
                waiting: 0
              },
              {
                id: '',
                name: '',
                buyin: '',
                gamerunning: 0,
                seatsavailable: 0,
                waiting: 0
               },
        ]
      
    }
  }

handleLogIn = () => {
  if(this.state.isLogginIn){
    this.setState({isLogginIn: false})
  } else {
    this.setState({isLogginIn: true})
  }
}

loadTable = () => {
  setInterval(() => {fetch('http://localhost:3000/', {
            method: 'get'
        })
        .then(response => response.json())
        .then(game => {
            if(game) {
                 this.setState({ game: game })
            }
            console.log(game)
        })}, 1000)
}

  render() {
    return (
      <div onLoad={this.loadTable} className="App">
      
      <Particles className="particles" params={particlesOption}/>
      {
        this.state.isLogginIn ? 
        <div>
        <button onClick={this.handleLogIn} className="btn-login f6 input-reset grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Log out</button>
        <Dashboard/>
        </div>
        :
        <div>
          <img onClick={this.handleLogIn} className="logo pt4" src={logo} alt="DuskTillDawn-Logo"/>
          <Table table={this.state.game}/> 
        </div>
      }
      </div>
    );
  }

}

export default App;
