# CineLux — Cartelera de películas

Proyecto de la asignatura **Desarrollo de Aplicaciones Empresariales (ReactJS · 4-C24-A)**.

Aplicación de cartelera de cine construida con **React + Vite** que muestra una película
destacada (Hero) y la cartelera completa a partir de un archivo de datos.

## 🚀 Puesta en marcha

```bash
npm install     # instala las dependencias
npm run dev     # levanta el servidor de desarrollo (http://localhost:5173)
npm run build   # compila para producción
npm run lint    # ejecuta el linter (Oxlint)
```

## 🧱 Estructura del proyecto

```
src/
├── components/          # Componentes funcionales de la interfaz
│   ├── Header.jsx         → Nombre del cine y navegación
│   ├── Hero.jsx           → Banner de la película destacada
│   ├── MovieCard.jsx      → Tarjeta de una película
│   ├── MovieList.jsx      → Recorre la cartelera con map
│   └── Footer.jsx         → Datos de contacto e información
├── data/
│   └── moviesData.js      → Archivo de datos de la cartelera
├── styles/              # Arquitectura de CSS
│   ├── variables.css      → Design tokens (colores, tipografía, espacios…)
│   ├── global.css         → Reset y estilos base
│   ├── App.css            → Maquetación general
│   └── <Componente>.css   → Estilos específicos de cada componente
├── App.jsx              # Compone Header + Hero + MovieList + Footer
└── main.jsx             # Punto de entrada de React
```

## 🎬 Recorte de la interfaz en componentes

| Componente | Responsabilidad | Props que recibe |
|---|---|---|
| `Header` | Marca del cine + barra de navegación | — |
| `Hero` | Banner de la película destacada | `movie` |
| `MovieList` | Recorre la cartelera y dibuja las tarjetas | `movies` |
| `MovieCard` | Tarjeta: imagen, título, valoración y horarios | `movie` |
| `Footer` | Contacto, horario de taquilla y redes | — |

**Flujo de datos:** los datos viven una única vez en `moviesData.js`. `App.jsx` los lee y los
pasa por *props* a sus hijos: `Hero` recibe la película destacada y `MovieList` recibe el array
completo, que a su vez pasa una película a cada `MovieCard`. Los componentes hijos no importan
los datos directamente, solo los reciben.

## 🗂️ Datos de la cartelera (`src/data/moviesData.js`)

El array `movies` contiene 8 películas, cada una con:

- `id` — identificador único (se usa como `key` en el `map`)
- `title` — título
- `image` — URL de la imagen
- `synopsis` — sinopsis
- `classification` — clasificación (AA, A, B, B12, B15, C)
- `rating` — valoración (sobre 5)
- `schedules` — horarios de proyección
- `featured` — booleano que marca la película destacada del Hero

La función `getFeaturedMovie()` devuelve la película destacada (o la primera como respaldo).

## 📦 Dependencias

| Dependencia | Versión | Uso |
|---|---|---|
| `react` | ^19.3.1 | Librería de la interfaz |
| `react-dom` | ^19.3.1 | Renderizado en el DOM |
| `vite` | ^8.3.6 | Bundler y servidor de desarrollo |
| `@vitejs/plugin-react` | ^6.1.2 | Soporte de React (HMR) en Vite |
| `oxlint` | ^1.90.0 | Linter del proyecto |

## 🐛 Errores típicos registrados

Durante el desarrollo se provocaron y registraron tres errores habituales en React:

| Error | Mensaje |
|---|---|
| Usar `class` en vez de `className` | `Invalid DOM property 'class'. Did you mean 'className'?` |
| Devolver dos nodos raíz | `Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment '<>...</>'?` |
| Olvidar la `key` en el `map` | `Each child in a list should have a unique "key" prop.` |
