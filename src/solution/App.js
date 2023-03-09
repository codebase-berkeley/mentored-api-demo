import axios from 'axios';

import './App.css';
import doggo1 from './assets/dog1.gif';
import doggo2 from './assets/dog2.gif';
import { useState } from 'react';


function App() {
  // States necessary to pass to components
  const [dogIMG, setDogIMG] = useState();
  const [dogBreed, setDogBreed] = useState("No doggo yet...");

  async function generateDogPicture() {
    // API URL to request data from
    const url = "https://dog.ceo/api/breeds/image/random";

    // Axios function to make a get request from the URL
    // We then call .then to specify behavior after receiving a response
    let dogURL = "";
    await axios.get(url)
      .then(res => {
        // Set the state to the dog URL received
        let data = res.data;
        dogURL = data["message"];
      })
      .catch(err => { console.log(err); })
    
    // Parse the URL and set the breed state
    let breed = dogURL.split("/")
    breed = breed[breed.length - 2].split("-");

    setDogBreed(breed.join(" "));
    setDogIMG(dogURL)
  }

  return (
    <div className="App">
      {/* Title of the dog generator */}
      <div className="title">🐕 Doggo Generator 🐕</div>
      <div className="body">
        <div className="sideColumn">
			<img src={doggo1} alt="dog1"/>
        </div>
        {/* Body that contains the dog image */}
        <div className="centerColumn">
          <span className='breed'>{dogBreed}</span>
          <img className="dog" src={dogIMG} alt=""/>
          <button className="button1" onClick={generateDogPicture}>Generate</button>;
        </div>
        <div className="sideColumn">
			<img src={doggo2} alt="dog2"/>
		</div>
      </div>
    </div>
  );
}

export default App;
