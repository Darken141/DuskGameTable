import React from 'react';

const DashBoard = () => {
    return (
        <div>
            <h1 className="white">Settings</h1>
            <div className="center">
                <div className="pa2 mr6 white-80">
                    <div className="measure">
                        <label htmlFor="name" className="f6 b db mb2 white">Game</label>
                        <select id="name" className="ba b--black-20 pa3 mb2 w-100" type="text" aria-describedby="name-desc">
                        <option value="NHLE 1/1" defaultValue>NHLE 1/1</option>
                        <option value="NHLE 1/2">NHLE 1/2</option>
                        <option value="PLO 1/1">PLO 1/1</option>
                        <option value="PLO 2/2">PLO 2/2</option>
                        <option value="Dealer Choice 1/1">Dealer Choice 1/1</option>
                        <option value="Dealer Choice 2/2">Dealer Choice 2/2</option>
                        </select>
                        <small id="name-desc" className="f6 white-60 db mb2">Type of game.</small>
                    </div>
                </div>
                <div>
                    <div className="pa2 white-80">
                        <div className="measure">
                            <label htmlFor="teble-number" className="f6 b db mb2 white">Tables</label>
                            <input id="table-number" className="ba b--black-20 pa3 mb2 w-100" type="number" placeholder="0" min="0" aria-describedby="table-num-desc"/>
                            <small id="table-num-desc" className="f6 white-60 db mb2">Number of Tables.</small>
                        </div>
                    </div>
                    <div className="pa2 white-80">
                        <div className="measure">
                            <label htmlFor="seats-number" className="f6 b db mb2 white">Tables</label>
                            <input id="seats-number" className="ba b--black-20 pa3 mb2 w-100" type="number" placeholder="0" min="0" max="10" aria-describedby="seats-num-desc"/>
                            <small id="seats-num-desc" className="f6 white-60 db mb2">Players in-game.</small>
                        </div>
                    </div>
                    <div className="pa2 white-80">
                        <div className="measure">
                            <label htmlFor="wait-number" className="f6 b db mb2 white">Tables</label>
                            <input id="wait-number" className="ba b--black-20 pa3 mb2 w-100" type="number" placeholder="0" min="0" max="99" aria-describedby="wait-num-desc"/>
                            <small id="wait-num-desc" className="f6 white-60 db mb2">Players on the waiting list</small>
                        </div>
                    </div>
                </div>
            </div>

                <input className="ma2 b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" type="reset"/>
                <input className="ma2 b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" type="submit"/>
        </div>
    )
}

export default DashBoard;