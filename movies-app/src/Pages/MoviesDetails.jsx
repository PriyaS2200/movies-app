import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import "../styles/MoviesDetails.css"

export const MoviesDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState("");
    useEffect(() => {
          axios.get(`https://silken-resonant-surprise.glitch.me/movies/${id}`)
          .then((response) => setMovieDetails(response.data))
    },[id])

    console.log(movieDetails)

    return (
        <div className="home-container">
            <div className="movie-card">
            <h1>Movies Details</h1>
            <img src={movieDetails.poster} alt={movieDetails.title} /> 
            <h2>{movieDetails.title}</h2>
            <h3>{movieDetails.genre}</h3>
            <p>{movieDetails.description}</p>
            <p>{movieDetails.releaseDate}</p>
            </div>
        </div>
    )
}