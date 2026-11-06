import '../styles/Hero.css'

// Banner de la película destacada. Recibe la película por props.
function Hero({ movie }) {
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
        <button type="button" className="hero__cta">
          Comprar boletos
        </button>
      </div>
    </section>
  )
}

export default Hero
