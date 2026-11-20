import { useRef } from 'react'
import { usePremieres } from '../hooks/usePremieres'
import { useWindowSize } from '../hooks/useWindowSize'
import { getMovieColumns } from '../utils/layout.js'
import Button from './Button'
import '../styles/Premieres.css'

function PremiereSkeleton() {
  const { width } = useWindowSize()
  const count = getMovieColumns(width)
  return (
    <div className="premieres__skeletons" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => <div className="premieres__skeleton" key={index} />)}
    </div>
  )
}

function PremiereCarousel({ movies }) {
  const track = useRef(null)
  function scroll(direction) {
    track.current?.scrollBy({ left: direction * track.current.clientWidth, behavior: 'smooth' })
  }
  return (
    <>
      <div className="premieres__controls">
        <Button variant="outline" onClick={() => scroll(-1)} aria-label="Estrenos anteriores">←</Button>
        <Button variant="outline" onClick={() => scroll(1)} aria-label="Estrenos siguientes">→</Button>
      </div>
      <div className="premieres__track" ref={track} tabIndex={0} aria-label="Carrusel de estrenos">
        {movies.map((movie) => (
          <article className="premieres__card" key={movie.id}>
            <img src={movie.image} alt="" loading="lazy" />
            <div><h3>{movie.title}</h3><p className="text-muted">⭐ {movie.rating} · {movie.classification}</p></div>
          </article>
        ))}
      </div>
    </>
  )
}

function Premieres() {
  // El parámetro permite comprobar el error sin depender de un servidor.
  const shouldFail = new URLSearchParams(window.location.search).get('premieresError') === '1'
  const { status, data, error, retry } = usePremieres(shouldFail)
  return (
    <section className="premieres" id="estrenos" aria-labelledby="premieres-title">
      <h2 id="premieres-title" className="section-title">Próximos estrenos</h2>
      {status === 'loading' && <div role="status"><p>Cargando estrenos…</p><PremiereSkeleton /></div>}
      {status === 'error' && <div role="alert"><p>{error}</p><Button variant="outline" onClick={retry}>Reintentar</Button></div>}
      {status === 'success' && <PremiereCarousel movies={data} />}
    </section>
  )
}

export default Premieres