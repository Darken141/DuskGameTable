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
                            <td className="pa3">{table.table[0].name}</td>
                            <td className="pa3">{table.table[0].buyIn}</td>
                            <td className="pa3">{table.table[0].gameRunning}</td>
                            <td className="pa3">{table.table[0].seatsAvailable}</td>
                            <td className="pa3">{table.table[0].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.table[1].name}</td>
                            <td className="pa3">{table.table[1].buyIn}</td>
                            <td className="pa3">{table.table[1].gameRunning}</td>
                            <td className="pa3">{table.table[1].seatsAvailable}</td>
                            <td className="pa3">{table.table[1].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.table[2].name}</td>
                            <td className="pa3">{table.table[2].buyIn}</td>
                            <td className="pa3">{table.table[2].gameRunning}</td>
                            <td className="pa3">{table.table[2].seatsAvailable}</td>
                            <td className="pa3">{table.table[2].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.table[3].name}</td>
                            <td className="pa3">{table.table[3].buyIn}</td>
                            <td className="pa3">{table.table[3].gameRunning}</td>
                            <td className="pa3">{table.table[3].seatsAvailable}</td>
                            <td className="pa3">{table.table[3].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.table[4].name}</td>
                            <td className="pa3">{table.table[4].buyIn}</td>
                            <td className="pa3">{table.table[4].gameRunning}</td>
                            <td className="pa3">{table.table[4].seatsAvailable}</td>
                            <td className="pa3">{table.table[4].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table.table[5].name}</td>
                            <td className="pa3">{table.table[5].buyIn}</td>
                            <td className="pa3">{table.table[5].gameRunning}</td>
                            <td className="pa3">{table.table[5].seatsAvailable}</td>
                            <td className="pa3">{table.table[5].waiting}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;