import React from 'react';

function DogCard(props) {
const {name , type, age} = props


 age <= 4?styleObj = "yellow solid 2px":styleObj= "blue solid 2px";
const styleObj = {border};
  return (
    <div className="DogCard">
      <h3 style = {styleObj}>MY NAME IS: {name}</h3>
      <h3 style = {styleObj}>MY TYPE IS: {type}</h3>
      <h3 style = {styleObj}>MY AGE IS: {age}</h3>
    </div>
  );
}

export default DogCard;