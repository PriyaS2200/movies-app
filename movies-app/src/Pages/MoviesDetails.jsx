import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import "../styles/MoviesDetails.css"

export const MoviesDetails = () => {
    const navigate = useNavigate();
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
            <div className="btn">
            <button onClick={() => navigate("/movies")}>Go Back</button>
            </div>
            <div className="movie-card-content">
            <h1>Movies Details</h1>
            <img src={movieDetails.poster} alt={movieDetails.title} /> 
            <h2>{movieDetails.title}</h2>
            <h3>{movieDetails.genre}</h3>
            <p>{movieDetails.description}</p>
            <p>{movieDetails.releaseDate}</p>
            </div>
            </div>
        </div>
    )
}