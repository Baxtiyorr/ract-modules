import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import './GetMovie.scss';
import SearchMovie from "../SearchMovie/SearchMovie";
import { Link } from "react-router-dom";


interface Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
}

const GetMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU3MmIwZWU3OWE3ZWE1ZDdjNTYzZTVhNjhkMzljZiIsInN1YiI6IjY1NGI5YzY3NjdiNjEzMDEwMmUxYjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MI-1wzheKLHaaSIDKGu2LGyu7e8dtG31x9LdIwCuAfk'
        }
    };
    const url: string = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
    const imgUrl: string = 'https://image.tmdb.org/t/p/w500';

    const getMovies = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setLoading(false);
            setMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    if (loading) {
        return <Loading/>;
    }
    console.log(movies);
    

    return (
        <section>
            <div className="container">
                <div className="movies">
                    <h2 className="movies__title">Movies</h2>

                <SearchMovie/>

                    <h2 className="movies__title movies__title--all">All Movies</h2>
                    
                    <div className="movies__card-wrapper">
                        {movies.map((movie, index) => (
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
                    <div className="pagination">
                        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                        <span>{page}</span>
                        <button onClick={handleNextPage}>Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetMovie;
