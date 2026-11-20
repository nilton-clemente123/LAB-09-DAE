// Traduce el formato de la fuente al modelo usado por los componentes.
export function adaptMovie(movie) {
  return {
    id: movie.id,
    title: movie.titulo,
    image: movie.poster,
    synopsis: movie.sinopsis,
    classification: movie.clasificacion,
    rating: movie.valoracion,
    schedules: [...movie.horarios],
    featured: Boolean(movie.destacada),
  }
}