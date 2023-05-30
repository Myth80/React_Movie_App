import { useEffect, useState } from 'react';
//a0d400d2
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const api_site = 'http://www.omdbapi.com?apikey=a0d400d2';
 
const movie1= {
    "Title": "Fight Club",
    "Year": "1999",
    "imdbID": "tt0137523",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
}

const App =() => {
    const[searchTerm, setSearchTerm] = useState([]);
    const [movies, setMovies] = useState([]);
    const searchMovie = async (title) =>{
        const response = await fetch(`${api_site}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovie('Fight Club');
    }, []);

    return (
        <div className='app'>
            <h1>7Movies</h1>
            <div className='search'>
            <input
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt='Search'
            onClick={() => searchMovie(searchTerm)}
            />
            </div>

            {
                movies?.length > 0
                ?(
                    <div className='container'>
            {movies.map((movie) => (<MovieCard movie={movie} />))}
            </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

            
            </div>
    )
}
export default App;  