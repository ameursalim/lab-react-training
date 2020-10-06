import React from 'react'



const BoxColor = (props) => {
    const { r, g, b } = props;

   

    // console.log(hexColor);

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    };

    return (
        <div className="BoxColor box" style={divStyle}>
            {`rgb(${r}, ${g}, ${b})`}
         
        </div>
    )
}

export default BoxColor

