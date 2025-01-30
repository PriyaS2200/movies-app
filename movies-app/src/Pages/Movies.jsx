import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Movies.css"

export const Movies = () => {
    const [movies,setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        axios.get("https://canyon-grizzled-reason.glitch.me/movies")
        .then((response) => setMovies(response.data.movies))
        .catch((error) => setError(error))
        .finally(setIsLoading(false));

    },[])

    const handleDelete = (id) => {
        axios.delete(`https://canyon-grizzled-reason.glitch.me/movies/${id}`)
        .then((response) => {
            setMovies(movies.filter((movies) => movies.id !== id));
        })

    }

    const handleDetail = (id) => {
        navigate(`/movies/${id}`);
    }

    return (
        <>
        <h1>Movies</h1>
        {isLoading && <h3>Loading...</h3>}
        <button onClick={() => navigate("/add-movie")}>Add Movie</button>
        <div className="movie-container">
        {movies.map((movie)=> (
            <div key={movie.id}>
                <img src= {movie.poster} alt={movie.title} />
                <h2>{movie.title}</h2>
                <h3>{movie.genre}</h3>
                <h3>{movie.releaseDate}</h3>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
                <button onClick={() => handleDetail(movie.id)}>View Details</button>
            </div>
        ))}
        </div>
        {error && <p>{error}</p>}
        </>
    )
}