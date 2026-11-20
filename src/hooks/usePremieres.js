import { useEffect, useState } from 'react'
import { movies } from '../data/moviesData'

// La petición es local y simulada; el parámetro permite probar el error.
export function usePremieres(shouldFail = false) {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState({ status: 'loading', data: [], error: null })
  useEffect(() => {
    const timer = setTimeout(() => {
      if (shouldFail) {
        setResult({ status: 'error', data: [], error: 'No se pudieron cargar los estrenos.' })
      } else {
        setResult({ status: 'success', data: movies.slice(0, 5), error: null })
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [attempt, shouldFail])
  function retry() {
    setResult({ status: 'loading', data: [], error: null })
    setAttempt((current) => current + 1)
  }
  return { ...result, retry }
}