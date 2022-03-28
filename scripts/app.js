// Código principal de la aplicación

// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json


newGuessedWord();

function newGuessedWord() {

    STATE.reset("the avengers");
    updateElementDomSpan("#puzzle",STATE.movieGuess);
}


document.addEventListener("keyup", getLetter);

function getLetter(event) {    
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        STATE.listLetters.push(event.key);
        updateElementDomSpan("#guesses",STATE.listLetters);

        checkCorrectLetter(event.key.toLowerCase());
    }
}

function checkCorrectLetter(letter) {

    if(STATE.movie.includes(letter) && !STATE.movieGuess.includes(letter)){
        for (let i = 0; i < STATE.movie.length; i++) {
           if (STATE.movie[i]==letter.toLowerCase()) {
            STATE.movieGuess = STATE.movieGuess.slice(0,i)+letter+STATE.movieGuess.slice(i+1);
           } 
           updateElementDomSpan("#puzzle",STATE.movieGuess);
        }
    }else{
        console.log("no");
    }
}