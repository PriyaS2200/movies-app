import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const initial = {
    title: "",
    poster: "",
    releaseDate: "",
    genre: "",
    description: ""
};
export const AddMovie = () => {
    const [formData, setFormData] = useState(initial);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(`https://canyon-grizzled-reason.glitch.me/movies`,
            formData,
        )
            .then((response) => { console.log(response.data) })
        navigate("/movies");
    }

    return (
        <>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title"
                    value={formData.title} onChange={handleInput} />
                <input type="text" name="poster" placeholder="Poster url"
                    value={formData.poster} onChange={handleInput} />
                <input type="date" name="releaseDate" placeholder="Release Date"
                    value={formData.releaseDate} onChange={handleInput} />
                <input type="text" name="genre" placeholder="Genre"
                    value={formData.genre} onChange={handleInput} />
                <input type="text" name="description" placeholder="Description"
                    value={formData.description} onChange={handleInput} />
                <input type="submit" value="Save" />
            </form>
        </>
    )
}