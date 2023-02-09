import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const apiKey = 'c9cfdcec';

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const resonse = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await resonse.json();

      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie('Clueless');
  }, []);

  return (
    <div className='App'>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
