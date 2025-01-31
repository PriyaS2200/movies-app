import { Link } from "react-router-dom"

export const NotFound = () => {
    return <div className="home-container">
          <h1>Not Found</h1>
          <h2>Error 404</h2> 
          <Link to="/">Click to go to Home page</Link>
    </div>
}