import { test } from 'node:test'
import assert from 'node:assert/strict'
import { adaptMovie } from '../src/utils/movieAdapter.js'
import { movies, getFeaturedMovie } from '../src/data/moviesData.js'

test('adapta todos los campos sin compartir el arreglo de horarios', () => {
  const raw = { id: 9, titulo: 'Ejemplo', poster: 'poster', sinopsis: 'Texto', clasificacion: 'A', valoracion: 4, horarios: ['12:00'], destacada: true }
  const result = adaptMovie(raw)
  assert.deepEqual(result, { id: 9, title: 'Ejemplo', image: 'poster', synopsis: 'Texto', classification: 'A', rating: 4, schedules: ['12:00'], featured: true })
  assert.notEqual(result.schedules, raw.horarios)
})

test('la cartelera utiliza el modelo adaptado y conserva la destacada', () => {
  assert.equal(movies.length, 8)
  assert.equal(getFeaturedMovie().title, 'El Último Horizonte')
  assert.ok(movies.every((movie) => movie.title && Array.isArray(movie.schedules)))
})