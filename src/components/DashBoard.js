import React from 'react';

class DashBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            serverData: "https://mighty-castle-66787.herokuapp.com/",
            nameChange: '',
            buyinChange: '',
            highhand: ''
            }
    }

    onHighHandInputChange = (event) => {
        this.setState({ highhand: event.target.value})
    }

    onInputChange = (event) => {
        this.setState({
            nameChange: event.target.value
        })
    }

    handleHighHandChange = (id) => {
        //code to change and set up high hand
        fetch( this.state.serverData + 'change-highhand', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                highhand: this.state.highhand
            })
        }).then(response => response.json())
        .then(data => {
            this.props.loadHighHand();
        })
    }

    onInputBuyinChange = (event) => {
        this.setState({
            buyinChange: event.target.value
        })
    }

    handleSubmitNameChange = (id) => {
        this.updateDatabase('change-game-name', id);
    }

    handleSubmitBuyinChange = (id) => {
        this.updateDatabase('change-buyin', id);
    }

    updateDatabase = (route, id) => {
        if (route === 'change-game-name'){
            fetch( this.state.serverData + 'change-game-name', {
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
        } else if (route === 'change-buyin'){
            fetch(this.state.serverData + 'change-buyin', {
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
        } else if (route === 'change-game'){
            fetch(this.state.serverData + route, {
                method: "post",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: id,
                    gamerunning: this.props.table[id - 1].gamerunning
                })
            }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
        } else if (route === 'change-seats'){
            fetch(this.state.serverData + route, {
                method: "post",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: id,
                    seatsavailable: this.props.table[id - 1].seatsavailable
                })
            }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
        } else if (route === 'change-waiting'){
            fetch(this.state.serverData + route, {
                method: "post",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: id,
                    waiting: this.props.table[id - 1].waiting
                })
            }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    handlePlusGameClick = (id) => {
        this.setState({
            gamerunning: this.props.table[id - 1].gamerunning++
        })
        this.updateDatabase('change-game', id);
    }
    handleMinusGameClick = (id) => {
        this.setState({
            gamerunning: this.props.table[id - 1].gamerunning--
        })
        this.updateDatabase('change-game', id);
    }

    handlePlusSeatsClick = (id) => {
        this.setState({
            seatsavailable: this.props.table[id - 1].seatsavailable++
        })
        this.updateDatabase('change-seats', id)
    }
    handleMinusSeatsClick = (id) => {
        this.setState({
            seatsavailable: this.props.table[id - 1].seatsavailable--
        })
        this.updateDatabase('change-seats', id);
    }

    handlePlusWaitingClick = (id) => {
        this.setState({
            waiting: this.props.table[id - 1].waiting++
        })
        this.updateDatabase('change-waiting', id);
    }
    handleMinusWaitingClick = (id) => {
        this.setState({
            waiting: this.props.table[id - 1].waiting--
        })
        this.updateDatabase('change-waiting', id)
    }

    render() {
        const {table} = this.props;

        return (
            <div>
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
                                    <input 
                                        onChange={this.onInputChange} 
                                        type="text" 
                                        placeholder={table[0].name}/>
                                    <input 
                                        onClick={() => this.handleSubmitNameChange(1)} 
                                        type="submit"/>
                                </td>
                                <td className="pa3">
                                    <input 
                                        onChange={this.onInputBuyinChange} 
                                        type="text" 
                                        placeholder={table[0].buyin}/>
                                    <input 
                                        onClick={() => this.handleSubmitBuyinChange(1)} 
                                        type="submit"/>
                                </td>
                                <td className="pa3">
                                    <button 
                                        onClick={() => this.handleMinusGameClick(1)} 
                                        className="ma3">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    {table[0].gamerunning}
                                    <button 
                                        onClick={() => this.handlePlusGameClick(1)} 
                                        className="ma3">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </td>
                                <td className="pa3">
                                    <button
                                        onClick={() => this.handleMinusSeatsClick(1)} 
                                        className="ma3" >
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    {table[0].seatsavailable}
                                    <button 
                                        onClick={() => this.handlePlusSeatsClick(1)} 
                                        className="ma3">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </td>
                                <td className="pa3">
                                    <button 
                                        onClick={() => this.handleMinusWaitingClick(1)} 
                                        className="ma3" >
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    {table[0].waiting}
                                    <button 
                                        onClick={() => this.handlePlusWaitingClick(1)} 
                                        className="ma3">
                                        <i className="fas fa-plus"></i>
                                    </button>
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