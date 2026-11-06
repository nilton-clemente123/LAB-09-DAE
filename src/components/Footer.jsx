import '../styles/Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer__inner">
        <div className="footer__column">
          <h3 className="footer__title">CineLux</h3>
          <p>La mejor experiencia de cine para toda la familia.</p>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Contacto</h3>
          <ul className="footer__list">
            <li>📍 Av. Reforma 123, Ciudad Central</li>
            <li>📞 (55) 1234 5678</li>
            <li>✉️ contacto@cinelux.com</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Horario de taquilla</h3>
          <ul className="footer__list">
            <li>Lunes a viernes: 10:00 – 23:00</li>
            <li>Sábados y domingos: 09:00 – 00:00</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Síguenos</h3>
          <ul className="footer__list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {currentYear} CineLux. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
