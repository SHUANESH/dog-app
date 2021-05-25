import React from 'react';
import DogCard from './Components/feters/DogCard/DogCard.component';
function Home(props) {

  const arrayObj = [
  <DogCard name = "sara" type = "Chihuahua" age = {2}/> ,
  <DogCard name = "or" type = "Eskimo" age = {1}/> ,
  <DogCard name = "shuanesh" type = "Wolf" age = {5}/> ,
  <DogCard name = "eden" type = "Amstaff" age = {4} /> ];
  return (
    <div className="Home">
      
       <h1>{arrayObj[0]}</h1>
      
       <h1>{arrayObj[1]}</h1>
      
       <h1>{arrayObj[2]}</h1>
      
       <h1>{arrayObj[3]}</h1>

    </div>
  );
}

export default Home;