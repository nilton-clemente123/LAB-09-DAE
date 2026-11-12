import '../styles/MovieSearch.css'

// Entrada controlada: el texto no vive aquí, sino en el estado del padre (App).
// El padre pasa `value` y `onChange`; en cada pulsación se llama a onChange
// para actualizar ese estado.
function MovieSearch({ value, onChange }) {
  return (
    <div className="movie-search">
      <label htmlFor="movie-search" className="visually-hidden">
        Buscar película
      </label>
      <input
        id="movie-search"
        type="search"
        className="input"
        placeholder="Buscar película por título…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default MovieSearch
