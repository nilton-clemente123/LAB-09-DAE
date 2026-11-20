import '../styles/Header.css'

function Header({ favoriteCount }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo">
          <span aria-hidden="true">🎬</span> CineLux
        </a>
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            <li>
              <a href="#cartelera">Cartelera</a>
            </li>
            <li>
              <a href="#estrenos">Estrenos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <span className="header__favorites" aria-label={`${favoriteCount} películas favoritas`}>★ Favoritas: {favoriteCount}</span>
      </div>
    </header>
  )
}

export default Header
