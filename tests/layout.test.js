import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getMovieColumns } from '../src/utils/layout.js'

test('calcula columnas en los límites de cada tamaño de pantalla', () => {
  for (const [width, expected] of [[0, 1], [519, 1], [520, 2], [759, 2], [760, 3], [1099, 3], [1100, 4], [1920, 4]]) {
    assert.equal(getMovieColumns(width), expected, `ancho ${width}`)
  }
})