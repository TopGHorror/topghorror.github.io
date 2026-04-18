var col = ["Rank", "Poster", "Movie", "Score"];

function writeHeaders(table) {
  var tr = table.insertRow(-1);

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];

    if (col[i] === "Poster") {
      th.className = "poster";
    }

    tr.appendChild(th);
  }
}

function writeRows(table, year) {
  var rank = 1;

  for (var i = 0; i < movies.length; i++) {

    if (movies[i]["Year"] == year) {

      var tr = table.insertRow(-1);

      // Rank
      var cell0 = tr.insertCell(-1);
      cell0.innerHTML = rank++;

      // Poster
      var cell1 = tr.insertCell(-1);
      var img = document.createElement("img");
      img.src = movies[i]["Poster"];
      cell1.className = "poster";
      cell1.appendChild(img);

      // Movie
      var cell2 = tr.insertCell(-1);
      cell2.innerHTML = movies[i]["Movie"];

      // Score
      var cell3 = tr.insertCell(-1);
      cell3.innerHTML = movies[i]["Score"];
    }
  }
}

function writeRowsOverall(table) {
  var rank = 1;

  for (var i = 0; i < movies.length; i++) {

    var tr = table.insertRow(-1);

    var cell0 = tr.insertCell(-1);
    cell0.innerHTML = rank++;

    var cell1 = tr.insertCell(-1);
    var img = document.createElement("img");
    img.src = movies[i]["Poster"];
    cell1.className = "poster";
    cell1.appendChild(img);

    var cell2 = tr.insertCell(-1);
    cell2.innerHTML = movies[i]["Movie"];

    var cell3 = tr.insertCell(-1);
    cell3.innerHTML = movies[i]["Score"];
  }
}

function writeTable(table, tab) {
  var divContainer = document.getElementById(tab);
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}

function CreateTableFromJSON(year, tab) {

  var table = document.createElement("table");

  writeHeaders(table);

  if (year != 0) {
    writeRows(table, year);
  } else {
    writeRowsOverall(table);
  }

  writeTable(table, tab);
}