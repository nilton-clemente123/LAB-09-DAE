# CineLux — Cartelera de películas

Proyecto de la asignatura **Desarrollo de Aplicaciones Empresariales (ReactJS · 4-C24-A)**.

Aplicación de cartelera de cine construida con **React + Vite** que muestra una película
destacada (Hero) y la cartelera completa a partir de un archivo de datos.

## Estado, búsqueda y favoritas

| Dato recordado | Dónde vive | Motivo y persistencia |
|---|---|---|
| Texto actual de búsqueda (`search`) | `App` | Lo comparten el campo de `Hero` y el filtrado de `MovieList`. Se actualiza en cada pulsación y se reinicia al recargar. |
| Texto con retardo (`debouncedSearch`) | `App` | Permite filtrar solo después de 500 ms sin escribir; se comparte con `MovieList` y se reinicia al recargar. El temporizador se cancela al cambiar el texto o desmontar el componente. |
| Identificadores de favoritas (`favorites`) | `App` | Las tarjetas reciben el estado y la función para alternarlo por props. Se guardan en `localStorage` con la clave `cinelux-favorites` y se recuperan al iniciar. Si el almacenamiento falla o contiene datos inválidos, se comienza con una lista vacía. |

La cartelera y la película destacada son datos estáticos de `src/data/moviesData.js`, no estado mutable. Los resultados filtrados se calculan en `MovieList` a partir de la cartelera y la búsqueda, por lo que no se duplican en otro estado. El botón **Ver cartelera** desplaza a esa sección; no realiza una compra.

Para comprobar el retardo, abre la consola del navegador y escribe varias letras seguidas: el campo cambia inmediatamente, pero el mensaje `[MovieSearch] Filtrado:` y los resultados aparecen tras una pausa de 500 ms. Busca un título inexistente para mostrar el estado vacío. Marca una favorita, recarga y comprueba que sigue marcada; vuelve a pulsar para quitarla.

## 📸 Capturas de la búsqueda

### Búsqueda con resultados
<img width="846" height="634" alt="image" src="https://github.com/user-attachments/assets/3f8ac7a9-12c6-4c52-b16e-41ac82d5dcb5" />


<!-- ![Búsqueda con películas coincidentes](docs/busqueda-con-resultados.png) -->

### Búsqueda sin resultados

Al buscar un título que no existe, la cartelera muestra el estado vacío:

![Búsqueda sin películas coincidentes](docs/estado-vacio.png)

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
│   ├── Button.jsx         → Botón reutilizable con variantes
│   ├── MovieSearch.jsx    → Campo de búsqueda controlado
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
| `Button` | Botón reutilizable | `children`, `variant` y atributos del botón |
| `MovieSearch` | Campo de búsqueda controlado | `value`, `onChange` |
| `MovieList` | Filtra la cartelera y dibuja las tarjetas o el estado vacío | `movies`, `search`, `favorites`, `onToggleFavorite` |
| `MovieCard` | Tarjeta y acción de favorita | `movie`, `isFavorite`, `onToggleFavorite` |
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
