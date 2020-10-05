import React from 'react';


function Greetings(props) {
    const nationality = {
        de: 'Hallo',
        es: 'Hola',
        fr: 'Bonjour',
        it: 'Ciao',
        en: 'Hello'
    }
    return (
        <div className="greetings">
            <p>{nationality[props.lang]} {props.children}</p>
        </div>
    );
}

export default Greetings;