
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { Login } from './Pages/Login'
import { Footer } from './components/Footer'
import { PrivateRoute } from './components/PrivateRoute'
import { MoviesDetails } from './Pages/MoviesDetails'
import { AddMovie } from './Pages/AddMovie'
import { EditMovie } from './Pages/EditMovie'
import { NotFound } from './Pages/NotFound'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={
          <PrivateRoute>
            <Movies />
          </PrivateRoute>
        } />
        <Route path="/movies/:id" element={
          <PrivateRoute>
            <MoviesDetails />
          </PrivateRoute>
        } />
        <Route path="/add-movie" element={
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        } />
        <Route path="/edit-movie/:id" element={
          <PrivateRoute>
            <EditMovie />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
