import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Movies.css"

export const Movies = () => {
    const [movies,setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const limit = useState(5);
    const [totalItems, setTotalItems] = useState([]);
    useEffect(() => {
       axios.get(`https://silken-resonant-surprise.glitch.me/movies`)
       .then((response) => setTotalItems(response.data.movies))
    },[]);
    
    console.log(totalItems.length)
    console.log(limit)
    let totalPages = Math.ceil(totalItems.length / 5);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        axios.get(`https://silken-resonant-surprise.glitch.me/movies?page=${page}&limit=${limit}`)
        .then((response) => setMovies(response.data.movies))
        .catch((error) => setError(error))
        .finally(setIsLoading(false));

    },[page])

    console.log(movies)

    const handleDelete = (id) => {
        axios.delete(`https://silken-resonant-surprise.glitch.me/movies/${id}`)
        .then((response) => {
            setMovies(movies.filter((movies) => movies.id !== id));
        })

    }

    const handleDetail = (id) => {
        navigate(`/movies/${id}`);
    }

    const handlePrevious= () => {
        setPage((prevPage) => prevPage - 1)
    }

    const handlePage = () => {
        setPage((page) => page + 1 )
    }

    return (
        <div className="movie-main-container">
        <h1>Movies</h1>
        {isLoading && <h3>Loading...</h3>}
        <button onClick={() => navigate("/add-movie")}>Add Movie</button>
        <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
        <button onClick={handlePage} disabled={page == 6}>Next</button>
        <div className="movie-container">
        {movies.map((movie)=> (
            <div key={movie.id}>
                <img src= {movie.poster} alt={movie.title} />
                <h2>{movie.title}</h2>
                <h3>{movie.genre}</h3>
                <h3>{movie.releaseDate}</h3>
                <button onClick={()=> navigate(`/edit-movie/${movie.id}`)}>Edit</button>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
                <button onClick={() => handleDetail(movie.id)}>View Details</button>
            </div>
        ))}
        </div>
        {error && <p>{error}:Failed to fetch movies</p>}
        </div>
    )
}