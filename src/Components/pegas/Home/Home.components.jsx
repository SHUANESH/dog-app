import React from 'react';
import DogCard from '../../feters/DogCard/DogCard.components';

export default function Home() {

  const arrayObj = [
  <DogCard name= "sara" type= "Chihuahua" age=  {2} border= "black solid 2px"/> ,
  <DogCard name= "or" type= "Eskimo" age= {1}  border= "black solid 2px"/> ,
  <DogCard name= "shuanesh" type= "Wolf" age= {5} border= "black solid 2px"/> ,
  <DogCard name= "eden" type= "Amstaff" age= {4} border= "black solid 2px"/> ];
  return (
    <div className="Home">
      <div>{arrayObj[0]}</div>
      <div>{arrayObj[1]}</div>
      <div>{arrayObj[2]}</div>
      <div>{arrayObj[3]}</div>
    </div>
  );
}

 