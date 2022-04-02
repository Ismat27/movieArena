import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// 4e5416e9

const API_URL = 'http://www.omdbapi.com/?apikey=4e5416e9';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [message, setMessage] = useState("Search Movies")

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     // getting the movies only with data.Search
    //     setMovies(data.Search); 
    //     if (movies.length === 0) {
    //         setMessage('no movies found')
    //     }
    // }

    const searchMovies = (title) => {
        fetch(`${API_URL}&s=${title}`)
        .then(data => data.json())
        .then(data => {
            setMovies(data.Search)
        })
        if (movies.length === 0) {
            setMessage('no movie found')
        }
    }

    // useEffect(() => {
    //     searchMovies('anaconda')
    // }, []);

    return (
        <div className="app">
            <h1>MovieArena</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                 />

                 <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                  />
            </div>

            {
                movies?.length > 0 ?
                (<div className="container">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>): 

                (<div className="empty">
                    <h2>{message}</h2>
                </div>)
            }
            
        </div>
    );
}

export default App