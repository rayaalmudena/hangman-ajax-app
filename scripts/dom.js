function updateElementDomSpan(id,word) {
    document.querySelector(id).innerHTML="";
    for (let index = 0; index < word.length; index++) {
        let span = document.createElement("span");
        span.innerText = word[index];
        document.querySelector(id).appendChild(span);
    }
}

function addGuessedLetter(letter, isCorrect) {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.color = (isCorrect) ? 'green' : 'red';
    document.querySelector("#letters-tried").appendChild(span);

}