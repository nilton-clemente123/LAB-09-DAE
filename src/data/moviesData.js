import { adaptMovie } from '../utils/movieAdapter.js'

// Cartelera: archivo de datos de la aplicación.
// Cada película tiene: id, título, imagen, sinopsis, clasificación, valoración y horarios.
// La propiedad `featured` marca la película destacada que se muestra en el Hero.

const rawMovies = [
  {
    id: 1,
    titulo: 'El Último Horizonte',
    poster: 'https://picsum.photos/seed/el-ultimo-horizonte/400/600',
    sinopsis:
      'En un futuro lejano, una tripulación debe cruzar el borde del sistema solar en busca de un nuevo hogar para la humanidad.',
    clasificacion: 'B15',
    valoracion: 4.5,
    horarios: ['13:00', '16:15', '19:30', '22:00'],
    destacada: true,
  },
  {
    id: 2,
    titulo: 'La Sombra del Mar',
    poster: 'https://picsum.photos/seed/la-sombra-del-mar/400/600',
    sinopsis:
      'Un pescador regresa a su pueblo natal tras años de ausencia y se enfrenta a los secretos que lo alejaron de su familia.',
    clasificacion: 'A',
    valoracion: 4.2,
    horarios: ['12:30', '15:45', '18:50', '21:15'],
    destacada: false,
  },
  {
    id: 3,
    titulo: 'Código Aurora',
    poster: 'https://picsum.photos/seed/codigo-aurora/400/600',
    sinopsis:
      'Una agente encubierta descubre una conspiración global mientras persigue a un hacker que puede desactivar todas las redes del planeta.',
    clasificacion: 'B15',
    valoracion: 4.8,
    horarios: ['14:00', '17:10', '20:20'],
    destacada: false,
  },
  {
    id: 4,
    titulo: 'El Jardín Secreto',
    poster: 'https://picsum.photos/seed/el-jardin-secreto/400/600',
    sinopsis:
      'Dos hermanos descubren un jardín mágico escondido tras la casa de su tío, capaz de conceder deseos con consecuencias inesperadas.',
    clasificacion: 'A',
    valoracion: 4.0,
    horarios: ['11:00', '14:20', '17:30'],
    destacada: false,
  },
  {
    id: 5,
    titulo: 'Medianoche en Praga',
    poster: 'https://picsum.photos/seed/medianoche-en-praga/400/600',
    sinopsis:
      'Un escritor en crisis conoce a una violinista callejera durante una noche mágica que cambiará el rumbo de su vida.',
    clasificacion: 'B',
    valoracion: 4.3,
    horarios: ['15:00', '18:00', '21:00'],
    destacada: false,
  },
  {
    id: 6,
    titulo: 'Furia de Titanes',
    poster: 'https://picsum.photos/seed/furia-de-titanes/400/600',
    sinopsis:
      'Dos leyendas del ring se enfrentan en una pelea por el título mundial que definirá quién es el mejor de su generación.',
    clasificacion: 'B12',
    valoracion: 4.1,
    horarios: ['13:30', '16:40', '19:40', '22:30'],
    destacada: false,
  },
  {
    id: 7,
    titulo: 'Pequeños Gigantes',
    poster: 'https://picsum.photos/seed/pequenos-gigantes/400/600',
    sinopsis:
      'Un grupo de niños construye un robot gigante para competir en el torneo de ciencias y salvar su escuela del cierre.',
    clasificacion: 'AA',
    valoracion: 4.7,
    horarios: ['10:30', '13:00', '16:00'],
    destacada: false,
  },
  {
    id: 8,
    titulo: 'El Silencio de las Montañas',
    poster: 'https://picsum.photos/seed/el-silencio-de-las-montanas/400/600',
    sinopsis:
      'Una expedición de alpinistas queda atrapada en una tormenta mientras algo acecha entre las cumbres nevadas.',
    clasificacion: 'C',
    valoracion: 4.4,
    horarios: ['18:30', '21:30', '23:00'],
    destacada: false,
  },
]

export const movies = rawMovies.map(adaptMovie)

// Devuelve la película destacada para el Hero (o la primera como respaldo).
export function getFeaturedMovie() {
  return movies.find((movie) => movie.featured) ?? movies[0]
}
