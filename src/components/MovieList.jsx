import MovieCard from './MovieCard'
import '../styles/MovieList.css'

// Recorre la cartelera con map y dibuja una tarjeta por película.
// Cada elemento recibe una clave (key) única a partir de movie.id.
function MovieList({ movies }) {
  return (
    <section className="movie-list" id="cartelera">
      <h2 className="movie-list__title">Cartelera</h2>
      <div className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default MovieList
