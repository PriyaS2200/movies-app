import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Movies.css";

const initial = {
    title: "",
    poster: "",
    releaseDate: "",
    genre: "",
    description: ""
};
export const EditMovie = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(initial);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`https://silken-resonant-surprise.glitch.me/movies/${id}`)
        .then((response) => setFormData(response.data))

    },[id])

    const handleData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleEdit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.put(`https://silken-resonant-surprise.glitch.me/movies/${id}`,
            formData,
        )
            .then((response) => { console.log(response.data) })
        navigate("/movies");
    }

    return (
        <div className="home-container">
        <h1>Edit Movie</h1>
        <form onSubmit={handleEdit}>
                <input type="text" name="title" placeholder="Title"
                    value={formData.title} onChange={handleData} />
                <input type="text" name="poster" placeholder="Poster url"
                    value={formData.poster} onChange={handleData} />
                <input type="date" name="releaseDate" placeholder="Release Date"
                    value={formData.releaseDate} onChange={handleData} />
                <input type="text" name="genre" placeholder="Genre"
                    value={formData.genre} onChange={handleData} />
                <input type="text" name="description" placeholder="Description"
                    value={formData.description} onChange={handleData} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}