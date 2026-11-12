import '../styles/Hero.css'
import Button from './Button'
import MovieSearch from './MovieSearch'

// Banner de la película destacada. Recibe la película por props.
function Hero({ movie, search, onSearchChange }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero__image" src={movie.image} alt={movie.title} />
      <div className="hero__overlay" aria-hidden="true"></div>
      <div className="hero__content">
        <span className="hero__badge">Estreno destacado</span>
        <h2 className="hero__title">{movie.title}</h2>
        <p className="hero__synopsis">{movie.synopsis}</p>
        <div className="hero__meta">
          <span>Clasificación: {movie.classification}</span>
          <span>⭐ {movie.rating}</span>
        </div>
        <div className="hero__actions">
          <Button onClick={() => document.getElementById('cartelera')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver cartelera
          </Button>
          <MovieSearch value={search} onChange={onSearchChange} />
        </div>
      </div>
    </section>
  )
}

export default Hero
