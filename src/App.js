import doggo1 from './assets/dog1.gif';
import doggo2 from './assets/dog2.gif';
import './App.css';
import { useState } from 'react';

function App() {
  function generateDog() {
    alert("Hehehe generate a dog!");
  }

  return (
    <div className="App">
      {/* Title of the dog generator */}
      <div className="title">🐕 Doggo Generator 🐕</div>
      {/* Body that contains the dog image */}
      <div className="body">
        <div className="sideColumn">
			<img src={doggo1} alt="dog1"/>
        </div>
        <div class="centerColumn">
          <img className="dog" alt=""/>
          <button className="button1" onClick={generateDog}>Generate</button>;
        </div>
        <div className="sideColumn">
			<img src={doggo2} alt="dog2"/>
		</div>
      </div>
    </div>
  );
}

export default App;
