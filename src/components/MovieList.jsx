import MovieCard from './MovieCard'
import { useWindowSize } from '../hooks/useWindowSize'
import { getMovieColumns } from '../utils/layout.js'
import '../styles/MovieList.css'

// Recorre la cartelera con map y dibuja una tarjeta por película.
// Cada elemento recibe una clave (key) única a partir de movie.id.
function MovieList({ movies, search, favorites, onToggleFavorite }) {
  const { width } = useWindowSize()
  const columns = getMovieColumns(width)
  const query = search.trim().toLocaleLowerCase('es')
  const filteredMovies = movies.filter((movie) => movie.title.toLocaleLowerCase('es').includes(query))
  return (
    <section className="movie-list" id="cartelera">
      <h2 className="movie-list__title">Cartelera</h2>
      {filteredMovies.length > 0 ? (
        <div className="movie-list__grid" style={{ '--movie-columns': columns }}>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFavorite={favorites.includes(movie.id)} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      ) : (
        <div className="movie-list__empty" role="status">
          <h3 className="movie-list__empty-title">No encontramos películas</h3>
          <p className="movie-list__empty-text">No hay resultados para «{search}». Prueba con otro título.</p>
        </div>
      )}
    </section>
  )
}

export default MovieList
