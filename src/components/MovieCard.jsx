import '../styles/MovieCard.css'

// Tarjeta de una película. Recibe la película por props y muestra
// su imagen, título, valoración y horarios.
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img className="movie-card__image" src={movie.image} alt={movie.title} />
      <div className="movie-card__body">
        <div className="movie-card__header">
          <h3 className="movie-card__title">{movie.title}</h3>
          <span className="movie-card__rating">⭐ {movie.rating}</span>
        </div>
        <span className="movie-card__classification">{movie.classification}</span>
        <div className="movie-card__schedules">
          {movie.schedules.map((time) => (
            <span key={time} className="movie-card__time">
              {time}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default MovieCard
