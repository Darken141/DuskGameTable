import React from 'react';

const Table = ( { table } ) => {
    return (
        <div className="pa4 table">
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
                            <td className="pa3">{table[0].name}</td>
                            <td className="pa3">{table[0].buyin}</td>
                            <td className="pa3">{table[0].gamerunning}</td>
                            <td className="pa3">{table[0].seatsavailable}</td>
                            <td className="pa3">{table[0].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table[1].name}</td>
                            <td className="pa3">{table[1].buyin}</td>
                            <td className="pa3">{table[1].gamerunning}</td>
                            <td className="pa3">{table[1].seatsavailable}</td>
                            <td className="pa3">{table[1].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table[2].name}</td>
                            <td className="pa3">{table[2].buyin}</td>
                            <td className="pa3">{table[2].gamerunning}</td>
                            <td className="pa3">{table[2].seatsavailable}</td>
                            <td className="pa3">{table[2].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table[3].name}</td>
                            <td className="pa3">{table[3].buyin}</td>
                            <td className="pa3">{table[3].gamerunning}</td>
                            <td className="pa3">{table[3].seatsavailable}</td>
                            <td className="pa3">{table[3].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table[4].name}</td>
                            <td className="pa3">{table[4].buyin}</td>
                            <td className="pa3">{table[4].gamerunning}</td>
                            <td className="pa3">{table[4].seatsavailable}</td>
                            <td className="pa3">{table[4].waiting}</td>
                        </tr>
                        <tr className="stripe-dark">
                            <td className="pa3">{table[5].name}</td>
                            <td className="pa3">{table[5].buyin}</td>
                            <td className="pa3">{table[5].gamerunning}</td>
                            <td className="pa3">{table[5].seatsavailable}</td>
                            <td className="pa3">{table[5].waiting}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;