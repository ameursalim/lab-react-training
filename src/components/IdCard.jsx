import React from 'react'

const IdCard = (props) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  
    return (

        <div className="id-card">
      <img src={props.picture} alt={`Profile of ${props.firstName} ${props.lastName}`}/>
      <div className="box-card">
        <p>Last Name: <b>{props.lastName}</b></p>
        <p>First Name: <b>{props.firstName}</b></p>
        <p>Gender: <b>{props.gender}</b></p>
        <p>Height: <b>{props.height}</b></p>
        <p>Birth: <b>{props.birth.toDateString(options)}</b></p>
       
      </div>
    </div>
    )
  
};

export default IdCard
