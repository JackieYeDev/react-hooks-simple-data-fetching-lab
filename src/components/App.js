// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDog] = useState('');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setDog(data.message))
      .then(() => setLoaded(true));
  }, []);

  return (
    <div>
      {!loaded ? <p>Loading...</p> : <img src={dog} alt='A Random Dog'></img>}
    </div>
  );
}

export default App;
