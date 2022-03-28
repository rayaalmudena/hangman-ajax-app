# El Joc del Penjat (versió películes)

Completa el proyecto siguiendo los requisitos descritos en **requisitos.txt**
[Demo en Github Pages](https://omiras.github.io/hangman-ajax-app/)

## Pasos para afrontar el proyecto

## Requisitos

1. Origen de datos: Vamos a recuperar un fichero JSON con películas
2. Debe leer una tecla pusada por el usuario
3. Debemos comprobar si la letra pulsada
   se encuentra entre las letras de la palabra recuperada
4. Debemos actualizar la información gráfica
   en función del número de letras adivinadas (remplezar \* por letras )
5. Si adivino todas las letras, mostrar un mensaje de enhorabuena.
6. Si fallas una letra, restar intentos.
7. Si fallo todos los intentos: mostrar mensaje "GAme Over"
8. Necesitamos un botón para hacer un "reset" del juego
9. Debemos guardar las letras pulsadas. En caso de que pulsemos una
   que haya sido pulsada, no cuenta como error.

## Bonus

1. Mostrar en el juego que letras hemos pulsado ya.
2. Buscar un sonido de victoria y otro de derrota, y
   reproducirlos en el caso adecuado.

## Super bonus

1. Una vez adivinada la película, se hara una llamada
   a una API; buscando la película por su nombre,
   y recuperando una imagen de la misma (pósters, imagenes
   de promoción); y mostrarla al usuario.
2. Esta api se ubica en [Api Movies](https://api.themoviedb.org)

```
    const url = `https://api.themoviedb.org/3/search/movie?api_key=f67a8ad780c75b59b2e185315b4e7818&language=en-US&page=1&include_adult=false&query=${title}`
    const path_to_images = 'https://image.tmdb.org/t/p/original'
```

---

## Modularización

Diferentes ficheros para cada grupo de funcionalidades.

- Origen de datos, llamada a la API.
- Mantener el estado de la app: palabra a adivinar, letras ya pulsada, intentos, número de palabras de la película a adivinar
- Manipulación del DOM: actualizar número intentor, mostrar asteríscos o letra adivinada
- Archivo "inicial"; punto de entrada de la aplicación: configurar el juego (obtener palabra a adivinar, resetear número de intentos, etc).
