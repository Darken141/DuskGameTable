import React from 'react';

const Table = () => {
    return (
        <div className="pa4">
            <div className="overflow-auto shadow-3">
                <table className="f8 w-100 mw10" cellSpacing="0">
                    <thead>
                        <tr className="stripe-dark">
                        <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Game</th>
                        <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Tables</th>
                        <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Seats</th>
                        <th className="fw6 tl pa3 bg-navy white bb b--lightest-blue">Wait</th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy white">
                        <tr className="stripe-dark">
                        <td className="pa3">NHLE 1/1 </td>
                        <td className="pa3">1</td>
                        <td className="pa3">8</td>
                        <td className="pa3">3</td>
                        </tr>
                        <tr className="stripe-dark">
                        <td className="pa3">NHLE 1/2 </td>
                        <td className="pa3">3</td>
                        <td className="pa3">22</td>
                        <td className="pa3">0</td>
                        </tr>
                        <tr className="stripe-dark">
                        <td className="pa3">PLO 1/1 </td>
                        <td className="pa3">1</td>
                        <td className="pa3">4</td>
                        <td className="pa3">0</td>
                        </tr>
                        <tr className="stripe-dark">
                        <td className="pa3">PLO 2/2 </td>
                        <td className="pa3">1</td>
                        <td className="pa3">7</td>
                        <td className="pa3">0</td>
                        </tr>
                        <tr className="stripe-dark">
                        <td className="pa3">Dealer Choice 1/1 </td>
                        <td className="pa3">0</td>
                        <td className="pa3">0</td>
                        <td className="pa3">2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;