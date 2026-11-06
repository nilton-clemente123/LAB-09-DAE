import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import { movies, getFeaturedMovie } from './data/moviesData'
import './styles/App.css'

function App() {
  const featuredMovie = getFeaturedMovie()

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero movie={featuredMovie} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </div>
  )
}

export default App
