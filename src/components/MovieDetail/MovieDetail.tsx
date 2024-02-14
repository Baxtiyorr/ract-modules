import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

import './MovieDetail.scss'
import { Link, useParams } from "react-router-dom";

interface Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    tagline: string;
    original_language: string;
    runtime: number;
    status: string;
    vote_count: number;
    release_date: string;

}


const MovieDetail = () => {

    const {movieId} = useParams()

    const [movies, setMovies] = useState<Movie | null>(null);
    

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU3MmIwZWU3OWE3ZWE1ZDdjNTYzZTVhNjhkMzljZiIsInN1YiI6IjY1NGI5YzY3NjdiNjEzMDEwMmUxYjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MI-1wzheKLHaaSIDKGu2LGyu7e8dtG31x9LdIwCuAfk'
        }
    };
    const url: string = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const imgUrl: string = 'https://image.tmdb.org/t/p/w500';

    const getMoviesDetail = async () => {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMoviesDetail();
    }, [movieId]);

    console.log(movies);
    

    return (
    <>
      <div className="container">
        <div className="movie__wrapper">
        <Link to={'/'}>
                <button><FaArrowLeft className="arrow-icon"/> <p className="btn-text">Back</p></button>
                
                </Link>
            <div className="movie__wrapper-img"><img src={imgUrl + movies?.poster_path} alt='movie' /></div>
            <div className="movie__wrapper-content">
                <h1>Title: {movies?.title}</h1>
                <h2>Tags: {movies?.tagline}</h2>
                <h2>Language: {movies?.original_language}</h2>
                <h2>Status: {movies?.status}</h2>
                <h2>Published at: {movies?.release_date}</h2>
                <h2>Runtime: {movies?.runtime} minutes</h2>
                <h2>Rating: {movies?.vote_average}</h2>
                <h2>Voted: {movies?.vote_count} people</h2>
                <h2>Overview: <p> {movies?.overview} </p></h2>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetail
