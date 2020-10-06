import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Rondom from './components/Rondom';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture'



function App() {
  return (
    <div className="App">
    <h1>IdCard</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr/>
   <h1>Rondom</h1>
          <div>
            <Rondom min={1} max={6}/>
            <Rondom min={1} max={100}/>
          </div>
          <h1>BoxColor</h1>
          <div>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
          </div>
    <h1>Cards</h1>
    <div>
              <CreditCard
                  type="Visa"
                  number="0123456789018845"
                  expirationMonth={3}
                  expirationYear={2021}
                  bank="BNP"
                  owner="Maxence Bouret"
                  bgColor="#11aa99"
                  color="white" />
          <CreditCard
                  type="Master Card"
                  number="0123456789010995"
                  expirationMonth={3}
                  expirationYear={2021}
                  bank="N26"
                  owner="Maxence Bouret"
                  bgColor="#eeeeee"
                  color="#222222" />
          <CreditCard
                  type="Visa"
                  number="0123456789016984"
                  expirationMonth={12}
                  expirationYear={2019}
                  bank="Name of the Bank"
                  owner="Firstname Lastname"
                  bgColor="#ddbb55"
                  color="white" />

                  </div>

                  <h1>Like Button</h1>
      <LikeButton /> 
      <LikeButton />

      <h1>Clickable Picture</h1>
      <ClickablePicture
      img='/img/persons/maxence.png'
      imgClicked='/img/persons/maxence-glasses.png'
      />


    </div>
  );
}

export default App;
