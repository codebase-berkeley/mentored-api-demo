import './App.css';
import doggo1 from './assets/dog1.gif';
import doggo2 from './assets/dog2.gif';

import axios from 'axios';

function App() {
  function generateDogPicture() {
    // API URL to request data from
    const url = "https://dog.ceo/api/breeds/image/random";

    // Axios function to make a get request from the URL
    // We then call .then to specify behavior after receiving a response
    axios.get(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => { console.log(err); })
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
          <span className='breed'>No doggos yet...</span>
          <img className="dog" src="" alt=""/>
          <button className="button1">Generate</button>;
        </div>
        <div className="sideColumn">
			<img src={doggo2} alt="dog2"/>
		</div>
      </div>
    </div>
  );
}

export default App;
