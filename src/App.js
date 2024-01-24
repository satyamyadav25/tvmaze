import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Summary from './Pages/Summary';
import Form from './Pages/Form';
import { useState, useEffect } from 'react';

const App = () => {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
      <Routes>
          <Route path="/" element={<Home shows={shows}/>} />
          <Route path="/show/:id" element={<Summary shows={shows}/>} />
          <Route path="/form/" element={<Form shows={shows}/>} />
      </Routes>
  );
};

export default App;
