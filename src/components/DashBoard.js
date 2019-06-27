import React from 'react';

class DashBoard extends React.Component {
    constructor(){
        super();
        this.state = {
            nameChange: '',
            buyinChange: '',
            table: [{
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

    loadGames = () => {
        fetch('https://mighty-castle-66787.herokuapp.com/', {
            method: 'get'
        }).then(response => response.json())
        .then(game => {
            if(game) {
                 this.setState({ table: game })
            }
        })
    }

    onInputChange = (event) => {
        this.setState({
            nameChange: event.target.value
        })
    }

    onInputBuyinChange = (event) => {
        this.setState({
            buyinChange: event.target.value
        })
    }

    handleSubmitNameChange = (id) => {
        fetch('https://mighty-castle-66787.herokuapp.com/change-game-name', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                name: this.state.nameChange
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    handleSubmitBuyinChange = (id) => {
        fetch('https://mighty-castle-66787.herokuapp.com/change-buyin', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                buyin: '£' + this.state.buyinChange
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    handlePlusGameClick = (id) => {
        this.setState({
            gamerunning: this.state.table[id - 1].gamerunning++
        })

        fetch('https://mighty-castle-66787.herokuapp.com/change-game', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                gamerunning: this.state.table[id - 1].gamerunning
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    handleMinusGameClick = (id) => {
        this.setState({
            gamerunning: this.state.table[id - 1].gamerunning--
        })

        fetch('https://mighty-castle-66787.herokuapp.com/change-game', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                gamerunning: this.state.table[id - 1].gamerunning
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    handlePlusSeatsClick = (id) => {
        this.setState({
            seatsavailable: this.state.table[id - 1].seatsavailable++
        })

        fetch('https://mighty-castle-66787.herokuapp.com/change-seats', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                seatsavailable: this.state.table[id - 1].seatsavailable
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    handleMinusSeatsClick = (id) => {
        this.setState({
            seatsavailable: this.state.table[id - 1].seatsavailable--
        })

        fetch('https://mighty-castle-66787.herokuapp.com/change-seats', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                seatsavailable: this.state.table[id - 1].seatsavailable
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    handlePlusWaitingClick = (id) => {
        this.setState({
            waiting: this.state.table[id - 1].waiting++
        })

        fetch('https://mighty-castle-66787.herokuapp.com/change-waiting', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                waiting: this.state.table[id - 1].waiting
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    handleMinusWaitingClick = (id) => {
        this.setState({
            waiting: this.state.table[id - 1].waiting--
        })

        fetch('https://mighty-castle-66787.herokuapp.com/change-waiting', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                waiting: this.state.table[id - 1].waiting
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    render() {
        const {table} = this.state;

        return (
            <div>
                <button onClick={this.loadGames} className="f6 input-reset grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">refresh</button>
                <h1 className="white">Admin dashboard</h1>
                <div className="pa4">
                <div className="overflow-auto shadow-3">
                    <table className="f8 w-100 mw10" cellSpacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Game</th>
                                <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">min. Buyin</th>
                                <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Games running</th>
                                <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Seats available</th>
                                <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Waiting</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy white">
                            <tr className="stripe-dark">
                                <td className="pa3">
                                    <input onChange={this.onInputChange} type="text" placeholder={table[0].name}/>
                                    <input onClick={() => this.handleSubmitNameChange(1)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <input onChange={this.onInputBuyinChange} type="text" placeholder={table[0].buyin}/>
                                    <input onClick={() => this.handleSubmitBuyinChange(1)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusGameClick(1)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[0].gamerunning
            
                                    }
                                    <button onClick={() => this.handlePlusGameClick(1)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusSeatsClick(1)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[0].seatsavailable
                                    }
                                    <button onClick={() => this.handlePlusSeatsClick(1)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusWaitingClick(1)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[0].waiting
                                    }
                                    <button onClick={() => this.handlePlusWaitingClick(1)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">
                                    <input onChange={this.onInputChange} type="text" placeholder={table[1].name}/>
                                    <input onClick={() => this.handleSubmitNameChange(2)} type="submit"/></td>
                                <td className="pa3">
                                    <input onChange={this.onInputBuyinChange} type="text" placeholder={table[1].buyin}/>
                                    <input onClick={() => this.handleSubmitBuyinChange(2)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusGameClick(2)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[1].gamerunning
            
                                    }
                                    <button onClick={() => this.handlePlusGameClick(2)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusSeatsClick(2)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[1].seatsavailable
                                    }
                                    <button onClick={() => this.handlePlusSeatsClick(2)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusWaitingClick(2)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[1].waiting
                                    }
                                    <button onClick={() => this.handlePlusWaitingClick(2)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">
                                    <input onChange={this.onInputChange} type="text" placeholder={table[2].name}/>
                                    <input onClick={() => this.handleSubmitNameChange(3)} type="submit"/></td>
                                <td className="pa3">
                                    <input onChange={this.onInputBuyinChange} type="text" placeholder={table[2].buyin}/>
                                    <input onClick={() => this.handleSubmitBuyinChange(3)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusGameClick(3)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[2].gamerunning
            
                                    }
                                    <button onClick={() => this.handlePlusGameClick(3)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusSeatsClick(3)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[2].seatsavailable
                                    }
                                    <button onClick={() => this.handlePlusSeatsClick(3)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusWaitingClick(3)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[2].waiting
                                    }
                                    <button onClick={() => this.handlePlusWaitingClick(3)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">
                                    <input onChange={this.onInputChange} type="text" placeholder={table[3].name}/>
                                    <input onClick={() => this.handleSubmitNameChange(4)} type="submit"/></td>
                                <td className="pa3">
                                    <input onChange={this.onInputBuyinChange} type="text" placeholder={table[3].buyin}/>
                                    <input onClick={() => this.handleSubmitBuyinChange(4)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusGameClick(4)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[3].gamerunning
            
                                    }
                                    <button onClick={() => this.handlePlusGameClick(4)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusSeatsClick(4)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[3].seatsavailable
                                    }
                                    <button onClick={() => this.handlePlusSeatsClick(4)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusWaitingClick(4)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[3].waiting
                                    }
                                    <button onClick={() => this.handlePlusWaitingClick(4)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">
                                    <input onChange={this.onInputChange} type="text" placeholder={table[4].name}/>
                                    <input onClick={() => this.handleSubmitNameChange(5)} type="submit"/>
                                </td>
                                <td className="pa3">
                                <input onChange={this.onInputBuyinChange} type="text" placeholder={table[4].buyin}/>
                                <input onClick={() => this.handleSubmitBuyinChange(5)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusGameClick(5)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[4].gamerunning
            
                                    }
                                    <button onClick={() => this.handlePlusGameClick(5)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusSeatsClick(5)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[4].seatsavailable
                                    }
                                    <button onClick={() => this.handlePlusSeatsClick(5)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusWaitingClick(5)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[4].waiting
                                    }
                                    <button onClick={() => this.handlePlusWaitingClick(5)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr className="stripe-dark">
                                <td className="pa3">
                                    <input onChange={this.onInputChange} type="text" placeholder={table[5].name}/>
                                    <input onClick={() => this.handleSubmitNameChange(6)} type="submit"/></td>
                                <td className="pa3">
                                <input onChange={this.onInputBuyinChange} type="text" placeholder={table[5].buyin}/>
                                <input onClick={() => this.handleSubmitBuyinChange(6)} type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusGameClick(6)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[5].gamerunning
            
                                    }
                                    <button onClick={() => this.handlePlusGameClick(6)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusSeatsClick(6)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[5].seatsavailable
                                    }
                                    <button onClick={() => this.handlePlusSeatsClick(6)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                                <td className="pa3">
                                    <button onClick={() => this.handleMinusWaitingClick(6)} className="ma3" ><i className="fas fa-minus"></i></button>
                                    {
                                        table[5].waiting
                                    }
                                    <button onClick={() => this.handlePlusWaitingClick(6)} className="ma3"><i className="fas fa-plus"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

export default DashBoard;