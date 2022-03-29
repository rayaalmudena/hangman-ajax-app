// Código principal de la aplicación

// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json


newGuessedWord();

getMovie();
async function getMovie(){
    const response = await fetch ("https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json");
    if (response.ok) { // si el HTTP-status es 200-299
        // obtener cuerpo de la respuesta (método debajo)
        let movies = await response.json();
        let random = parseInt(Math.random()*100);
        console.log(movies[random]);
      } else {
        alert("Error-HTTP: " + response.status);
      }
}

function newGuessedWord() {

    STATE.reset("the avengers");
    updateElementDomSpan("#puzzle",STATE.movieGuess);
}


document.addEventListener("keyup", getLetter);

function getLetter(event) {    
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        checkCorrectLetter(event.key.toLowerCase());

        if (!STATE.listLetters.includes(event.key)) {
            STATE.listLetters.push(event.key);

            // Es correcta la letra pulsada? Colors
            let isCorrect = STATE.movie.includes(event.key);
            STATE.listLetters.push(event.key);
            addGuessedLetter(event.key, isCorrect);

        }                
   
        endGame();
    }
}

function checkCorrectLetter(letter) {

    if(STATE.movie.includes(letter)){
        for (let i = 0; i < STATE.movie.length; i++) {
           if (STATE.movie[i]==letter.toLowerCase()) {
            STATE.movieGuess = STATE.movieGuess.slice(0,i)+letter+STATE.movieGuess.slice(i+1);
           } 
           updateElementDomSpan("#puzzle",STATE.movieGuess);
        }
    }else if(!STATE.movie.includes(letter) && !STATE.listLetters.includes(letter)){
        STATE.tries=STATE.tries-1;      
    }
    document.querySelector("#guesses").textContent="TRIES:"+STATE.tries;
}

function endGame(){
    if (STATE.movie==STATE.movieGuess || STATE.tries==0) {
        document.removeEventListener("keyup", getLetter);        
    }

    let myAudio = document.querySelector('#audio');
    if(STATE.movie==STATE.movieGuess){
        document.querySelector("#guesses").textContent="YOU WIN";
        myAudio.src="../sounds/win.wav";
        myAudio.play()
    }else if(STATE.tries==0){
        document.querySelector("#guesses").textContent="YOU LOSE";
        myAudio.src="../sounds/lost.wav";
        myAudio.play()
    }

}

document.querySelector("#reset").addEventListener("click", restart);

function restart() {
    document.addEventListener("keyup", getLetter);
    newGuessedWord();
    updateElementDomSpan("#letters-tried",STATE.listLetters);
    document.querySelector("#guesses").textContent="";
}