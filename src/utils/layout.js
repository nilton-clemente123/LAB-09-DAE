// Puntos de corte compartidos por la cartelera y el indicador de carga.
export function getMovieColumns(width) {
  return width >= 1100 ? 4 : width >= 760 ? 3 : width >= 520 ? 2 : 1
}