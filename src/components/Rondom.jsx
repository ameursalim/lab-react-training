import React from 'react'

const Rondom = (props) => {
    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div>
        <div className="randomNum">
            <p>Random value between {props.min} and {props.max} => {randomNum}</p>
        </div>
            
        </div>
    )
}

export default Rondom

