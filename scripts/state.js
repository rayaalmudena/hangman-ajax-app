let STATE = {
    movie: undefined,
    movieGuess: undefined,
    tries: 5,
    listLetters:[],

    reset(movie) {
        this.movie = movie;
        this.movieGuess = movie.replaceAll(/[a-zA-z]/g, "*");
        this.tries=5;
        this.listLetters=[];
    }
   
};