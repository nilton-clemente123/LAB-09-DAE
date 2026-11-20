import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import Premieres from './components/Premieres'
import { useDebounce } from './hooks/useDebounce'
import './styles/Toast.css'
import { movies, getFeaturedMovie } from './data/moviesData'
import './styles/App.css'

function App() {
  const featuredMovie = getFeaturedMovie()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const [notice, setNotice] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('cinelux-favorites') || '[]')
      return Array.isArray(stored) ? stored.filter((id) => movies.some((movie) => movie.id === id)) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    if (!notice) return undefined
    const timer = setTimeout(() => setNotice(null), 3000)
    return () => clearTimeout(timer)
  }, [notice])

  useEffect(() => {
    try {
      localStorage.setItem('cinelux-favorites', JSON.stringify(favorites))
    } catch (error) {
      console.warn('No se pudieron guardar las favoritas:', error)
    }
  }, [favorites])

  function toggleFavorite(id) {
    const movie = movies.find((item) => item.id === id)
    const wasFavorite = favorites.includes(id)
    setNotice({ message: `${movie.title} ${wasFavorite ? 'se quitó de' : 'se agregó a'} favoritas.` })
    setFavorites((current) => current.includes(id)
      ? current.filter((favoriteId) => favoriteId !== id)
      : [...current, id])
  }

  return (
    <div className="app">
      <Header favoriteCount={favorites.length} />
      <main className="app__main">
        <Hero movie={featuredMovie} search={search} onSearchChange={setSearch} />
        <Premieres />
        <MovieList movies={movies} search={search === '' ? '' : debouncedSearch} favorites={favorites} onToggleFavorite={toggleFavorite} />
      </main>
      <Footer />
      <div className="toast-region" role="status" aria-live="polite" aria-atomic="true">
        {notice && <p className="toast">{notice.message}</p>}
      </div>
    </div>
  )
}

export default App
