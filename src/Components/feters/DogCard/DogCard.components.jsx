import React from 'react';

export default function DogCard(props) {
const {name , type, age ,border} = props

let styleObj = {border:border};
age <= 4? styleObj = {border:"yellow solid 2px"}:styleObj={border:"green solid 2px"};

  return (
    <div className="DogCard">
      <h3 style = {styleObj}> MY NAME IS: {name} MY TYPE IS: {type} MY AGE IS: {age}</h3>
    </div>
  );
}

