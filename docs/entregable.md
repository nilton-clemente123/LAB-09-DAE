# Entregable — CineLux

## Árbol de componentes y datos

```text
App: search, favorites y notice; useDebounce
├── Header: recibe solo favoriteCount = favorites.length
├── Hero: recibe movie, search y onSearchChange
│   ├── Button: navega a la cartelera o limpia el filtro
│   └── MovieSearch: input controlado por search
├── Premieres: usePremieres (status, data, error y retry)
│   ├── PremiereSkeleton: presentación de carga; useWindowSize
│   └── PremiereCarousel: películas y referencia de desplazamiento
├── MovieList: películas, búsqueda y favoritas; useWindowSize;
│   │          calcula las películas filtradas sin duplicarlas en estado
│   └── MovieCard: recibe movie, isFavorite y onToggleFavorite
│       └── Button: comunica el clic sin conocer el aviso
├── Footer
└── Aviso emergente: muestra notice en una región accesible
```

`favorites` vive en `App`, el antecesor común de la cabecera y la cartelera; el contador se deriva como `favorites.length`, sin guardarlo como otro estado. Si el contador viviera únicamente en `Header`, las tarjetas, que son sus hermanas y no sus hijas, no podrían actualizarlo mediante el flujo habitual de props. Sería necesario elevar el estado o introducir otro mecanismo compartido. La cabecera solo recibe un número, no toda la lista.

Los identificadores favoritos se guardan en `localStorage` bajo `cinelux-favorites`. Una tarjeta invoca la función recibida por props; `App` cambia los datos y controla el aviso durante tres segundos. La tarjeta no sabe cómo se presenta el mensaje.

## Adaptador, búsqueda y pantalla

Los datos locales de `src/data/moviesData.js` usan nombres de origen en español. `src/utils/movieAdapter.js` los transforma al modelo de la aplicación (`title`, `image`, `schedules`, etc.) antes de distribuirlos. No se consume una API real.

`useDebounce`, utilizado por `App`, extrae el temporizador que retrasa el filtrado 500 ms y cancela el temporizador anterior. **Limpiar filtro** vacía el campo y muestra inmediatamente toda la cartelera.

`useWindowSize` extrae el estado del tamaño de la ventana y la gestión del listener de redimensionamiento, que retira al desmontarse. Lo comparten **`MovieList`**, que calcula el número de columnas de la cartelera, y **`PremiereSkeleton`**, que adapta el número de tarjetas de carga. Cada componente invoca el hook y mantiene su propia suscripción; el hook no comparte una instancia de estado entre ellos. Ambos utilizan `getMovieColumns`: 1 columna por debajo de 520 px, 2 desde 520 px, 3 desde 760 px y 4 desde 1100 px. La lógica de tamaño vive en los componentes que la necesitan, no en `App`.

`usePremieres`, utilizado por `Premieres`, extrae los estados de la petición simulada y el reintento. La interfaz está construida con React y componentes CSS propios; no integra una biblioteca de componentes externa. Se usan fuentes del sistema para no depender de servicios externos.

## Estrenos simulados y comprobación manual

`usePremieres` simula una petición de un segundo con las primeras cinco películas adaptadas de la cartelera; no son datos reales de próximos estrenos. Se muestran un esqueleto durante la espera, un carrusel cuando hay datos y un error con reintento en caso de fallo. Para forzar el fallo, añade `?premieresError=1` a la dirección. Mientras esté presente, cada reintento también fallará; retíralo y recarga para volver al caso de éxito.

1. Carga la página: observa el esqueleto y después el carrusel; usa sus flechas o desplázalo horizontalmente.
2. Fuerza el error como se indica arriba y prueba el botón de reintento.
3. Escribe un título y espera 500 ms; limpia el filtro y comprueba que el campo se vacía y la cartelera se restablece. Busca un título inexistente para ver el estado vacío.
4. Marca y desmarca una favorita: comprueba el aviso, el contador y la persistencia tras recargar.
5. Cambia el ancho de la ventana y revisa cabecera, banner, cartelera y pie en móvil y escritorio.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
npm test
```