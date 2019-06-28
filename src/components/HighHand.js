import React from 'react'

const HighHand = ({highhand}) => {
    return (
        <div className='pt5'>
            <h1 className="white f-headline text-shadow bb bw1 di" >High Hand of the Day</h1>
            <div className="">
                <p className="white f-6 lh-solid b mt0 pa5 text-shadow">{highhand[0].name}</p>
            </div>
        </div>
    )
}

export default HighHand;