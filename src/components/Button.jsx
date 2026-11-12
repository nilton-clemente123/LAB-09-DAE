import '../styles/Button.css'

// Botón reutilizable: recibe su contenido por `children` y su aspecto
// por la prop `variant`. Las variantes disponibles son:
//   - primary: acción principal (fondo rojo)
//   - outline: acción secundaria con borde
//   - active : estado resaltado (por ejemplo, una película favorita)
function Button({ children, variant = 'primary', type = 'button', onClick, className = '', ...rest }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
