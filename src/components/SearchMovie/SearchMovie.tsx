import { useState } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import './SearchMovie.scss'
import { Link } from "react-router-dom";

interface Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path:string;
}

const imgUrl: string = 'https://image.tmdb.org/t/p/w500';
const SearchMovie: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1&include_adult=false`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU3MmIwZWU3OWE3ZWE1ZDdjNTYzZTVhNjhkMzljZiIsInN1YiI6IjY1NGI5YzY3NjdiNjEzMDEwMmUxYjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MI-1wzheKLHaaSIDKGu2LGyu7e8dtG31x9LdIwCuAfk'
                }
            });

            const data = await response.json();
            setSearchResults(data.results);
            setLoading(false)
            e.currentTarget.reset()
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
   

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                
                <div className="search-icon"><IoSearchCircleOutline size={38} /></div>
                <label>
                    <input
                        placeholder="Search Movie"
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </label>
                <button className="search-btn" type="submit">Search</button>
            </form>
            
            <div className="movies__card-wrapper">
                {searchResults.map((movie, index) => (
                     <Link key={index} to={`/movie/${movie.id}`}>
                     <div  className="movies__card">
                         <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title}/>
                         <div className="movies__card-content">
                             <h2>{movie.title}</h2>
                             <p>{movie.overview}</p>
                             <span>{movie.vote_average}</span>
                         </div>
                     </div>
                     
                     
                     
                     </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchMovie;
