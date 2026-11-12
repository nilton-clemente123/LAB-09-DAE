import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import { movies, getFeaturedMovie } from './data/moviesData'
import './styles/App.css'

function App() {
  const featuredMovie = getFeaturedMovie()
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('cinelux-favorites') || '[]')
      return Array.isArray(stored) ? stored.filter((id) => movies.some((movie) => movie.id === id)) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('[MovieSearch] Filtrado:', search)
      setDebouncedSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    try {
      localStorage.setItem('cinelux-favorites', JSON.stringify(favorites))
    } catch (error) {
      console.warn('No se pudieron guardar las favoritas:', error)
    }
  }, [favorites])

  function toggleFavorite(id) {
    setFavorites((current) => current.includes(id)
      ? current.filter((favoriteId) => favoriteId !== id)
      : [...current, id])
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero movie={featuredMovie} search={search} onSearchChange={setSearch} />
        <MovieList movies={movies} search={debouncedSearch} favorites={favorites} onToggleFavorite={toggleFavorite} />
      </main>
      <Footer />
    </div>
  )
}

export default App
