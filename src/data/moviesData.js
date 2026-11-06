// Cartelera: archivo de datos de la aplicación.
// Cada película tiene: id, título, imagen, sinopsis, clasificación, valoración y horarios.
// La propiedad `featured` marca la película destacada que se muestra en el Hero.

export const movies = [
  {
    id: 1,
    title: 'El Último Horizonte',
    image: 'https://picsum.photos/seed/el-ultimo-horizonte/400/600',
    synopsis:
      'En un futuro lejano, una tripulación debe cruzar el borde del sistema solar en busca de un nuevo hogar para la humanidad.',
    classification: 'B15',
    rating: 4.5,
    schedules: ['13:00', '16:15', '19:30', '22:00'],
    featured: true,
  },
  {
    id: 2,
    title: 'La Sombra del Mar',
    image: 'https://picsum.photos/seed/la-sombra-del-mar/400/600',
    synopsis:
      'Un pescador regresa a su pueblo natal tras años de ausencia y se enfrenta a los secretos que lo alejaron de su familia.',
    classification: 'A',
    rating: 4.2,
    schedules: ['12:30', '15:45', '18:50', '21:15'],
    featured: false,
  },
  {
    id: 3,
    title: 'Código Aurora',
    image: 'https://picsum.photos/seed/codigo-aurora/400/600',
    synopsis:
      'Una agente encubierta descubre una conspiración global mientras persigue a un hacker que puede desactivar todas las redes del planeta.',
    classification: 'B15',
    rating: 4.8,
    schedules: ['14:00', '17:10', '20:20'],
    featured: false,
  },
  {
    id: 4,
    title: 'El Jardín Secreto',
    image: 'https://picsum.photos/seed/el-jardin-secreto/400/600',
    synopsis:
      'Dos hermanos descubren un jardín mágico escondido tras la casa de su tío, capaz de conceder deseos con consecuencias inesperadas.',
    classification: 'A',
    rating: 4.0,
    schedules: ['11:00', '14:20', '17:30'],
    featured: false,
  },
  {
    id: 5,
    title: 'Medianoche en Praga',
    image: 'https://picsum.photos/seed/medianoche-en-praga/400/600',
    synopsis:
      'Un escritor en crisis conoce a una violinista callejera durante una noche mágica que cambiará el rumbo de su vida.',
    classification: 'B',
    rating: 4.3,
    schedules: ['15:00', '18:00', '21:00'],
    featured: false,
  },
  {
    id: 6,
    title: 'Furia de Titanes',
    image: 'https://picsum.photos/seed/furia-de-titanes/400/600',
    synopsis:
      'Dos leyendas del ring se enfrentan en una pelea por el título mundial que definirá quién es el mejor de su generación.',
    classification: 'B12',
    rating: 4.1,
    schedules: ['13:30', '16:40', '19:40', '22:30'],
    featured: false,
  },
  {
    id: 7,
    title: 'Pequeños Gigantes',
    image: 'https://picsum.photos/seed/pequenos-gigantes/400/600',
    synopsis:
      'Un grupo de niños construye un robot gigante para competir en el torneo de ciencias y salvar su escuela del cierre.',
    classification: 'AA',
    rating: 4.7,
    schedules: ['10:30', '13:00', '16:00'],
    featured: false,
  },
  {
    id: 8,
    title: 'El Silencio de las Montañas',
    image: 'https://picsum.photos/seed/el-silencio-de-las-montanas/400/600',
    synopsis:
      'Una expedición de alpinistas queda atrapada en una tormenta mientras algo acecha entre las cumbres nevadas.',
    classification: 'C',
    rating: 4.4,
    schedules: ['18:30', '21:30', '23:00'],
    featured: false,
  },
]

// Devuelve la película destacada para el Hero (o la primera como respaldo).
export function getFeaturedMovie() {
  return movies.find((movie) => movie.featured) ?? movies[0]
}
