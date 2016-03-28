var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

var cheapmovies = movies.filter(function(movie){
  return movie.budget <= 100;
});

var cheaptitles = cheapmovies.map(function(movie){
  return movie.title;
});
var filteredmovies = "Movie Titles with less than a 100Million Dollar Budget";
console.log(filteredmovies);
console.log(cheaptitles);

function Leo(stars) {
  var found = false;
  stars.forEach(function(star) {
    if (star === "Leonardo DiCaprio") {
      found = true;
    }
  });
  return found;
}

function leoMovie (movie) {
  if(Leo(movie.stars)) {
    return true;
  } else {
    return false;
  }
}

var leoMovies = movies.filter(leoMovie);
var leoMovies = leoMovies.map(function(movie){
      return movie.title;
    });
var MoviesWLeo = "Movies with Leonardo Dicaprio as the Star";
console.log(MoviesWLeo);
console.log(leoMovies);
