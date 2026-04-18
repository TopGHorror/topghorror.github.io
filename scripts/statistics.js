function filmsWatched(year, element) {

    var tally = movies.filter(entry => entry.Year === year).length;
    var tallyElement = document.getElementById(element);
    tallyElement.textContent = tally;
}

function percentWatched(total, year, element) {

  var tally = movies.filter(entry => entry.Year === year).length;
  var percent = (tally / total) * 100;
  var percentElement = document.getElementById(element);
  percentElement.textContent = percent.toFixed(1) + "%";
}

function getTopMovieBy(field) {
  return movies.reduce((max, movie) => {
    return (movie[field] > max[field]) ? movie : max;
  });
}

function getTopRated() {
  return movies.reduce((max, movie) => {
    return (movie.Score > max.Score) ? movie : max;
  });
}

function getLowestRated() {
  return movies.reduce((min, movie) => {
    return (movie.Score < min.Score) ? movie : min;
  });
}

function getAverage(field) {
  const validValues = movies
    .map(movie => Number(movie[field]))
    .filter(value => !isNaN(value));

  const total = validValues.reduce((sum, value) => sum + value, 0);

  return validValues.length ? total / validValues.length : 0;
}

function updateSection(prefix, data, scoreKey, formatScore = true) {
  document.getElementById(`${prefix}-poster`).src = data.Poster;
  document.getElementById(`${prefix}-title`).textContent = data.Movie;

  const score = formatScore
      ? data[scoreKey].toFixed(1) + "/10"
      : data[scoreKey];

  document.getElementById(`${prefix}-score`).textContent = score;
}