import React from 'react';

const Table = ( {table } ) => {

    return (
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
                            <td className="pa3">{table.holdem1.name}</td>
                            <td className="pa3">{table.holdem1.buyIn}</td>
                            <td className="pa3">{table.holdem1.gameRunning}</td>
                            <td className="pa3">{table.holdem1.seatsAvailable}</td>
                            <td className="pa3">{table.holdem1.waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.holdem2.name}</td>
                            <td className="pa3">{table.holdem2.buyIn}</td>
                            <td className="pa3">{table.holdem2.gameRunning}</td>
                            <td className="pa3">{table.holdem2.seatsAvailable}</td>
                            <td className="pa3">{table.holdem2.waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.plo1.name}</td>
                            <td className="pa3">{table.plo1.buyIn}</td>
                            <td className="pa3">{table.plo1.gameRunning}</td>
                            <td className="pa3">{table.plo1.seatsAvailable}</td>
                            <td className="pa3">{table.plo1.waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.plo2.name}</td>
                            <td className="pa3">{table.plo2.buyIn}</td>
                            <td className="pa3">{table.plo2.gameRunning}</td>
                            <td className="pa3">{table.plo2.seatsAvailable}</td>
                            <td className="pa3">{table.plo2.waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.dc1.name}</td>
                            <td className="pa3">{table.dc1.buyIn}</td>
                            <td className="pa3">{table.dc1.gameRunning}</td>
                            <td className="pa3">{table.dc1.seatsAvailable}</td>
                            <td className="pa3">{table.dc1.waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.dc2.name}</td>
                            <td className="pa3">{table.dc2.buyIn}</td>
                            <td className="pa3">{table.dc2.gameRunning}</td>
                            <td className="pa3">{table.dc2.seatsAvailable}</td>
                            <td className="pa3">{table.dc2.waiting}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;