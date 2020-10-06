import React from 'react'

const CreditCard = (props) => {
    

    var cardPic = '';

    switch(props.type){
        case 'Visa':
            cardPic = '.public/img/visa.png';
            break;
        case 'Master Card':
            cardPic = '.public/img/master-card.svg';
        break;
        default:
        cardPic = '.public/img/visa.png';
 
    }


    return (
        <div className="container">
              <div className= 'creditCards'>
              
                <div className='cardContainer' style={{backgroundColor:props.bgColor}}>
                    <div className='cardLogo'>
                        <img src={cardPic} alt='card logo'></img>
                    </div>
                    <div className='cardNumber'>
                        <h2 style={{color:props.color}}>•••• •••• •••• {props.number.slice(-4)}</h2>
                    </div>
                    <div style={{color:props.color}} className='creditCardLetters'>
                        <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                        <p>{props.owner}</p>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default CreditCard
