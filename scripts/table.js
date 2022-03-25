var col;

function extractHeaders(){

  col = [];
  col.push("Rank");
  for (var i = 0; i < movies.length; i++) {
    for (var key in movies[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
}

function writeHeaders(table){

  var tr = table.insertRow(-1);

  for (var i = 0; i < col.length-1; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    if(i == 1) {
      th.className = "poster";
    }
    tr.appendChild(th);
  }
}

function writeRows(table, year){

  for (var i = 0; i < movies.length; i++) {

    if(movies[i][col[4]] == year) {

      tr = table.insertRow(-1);

      for (var j = 0; j < col.length-1; j++) {

        var tabCell = tr.insertCell(-1);

        if(j == 0) {
          tabCell.innerHTML = i + 1;
        } else if (j == 1) {
          var pic = document.createElement("IMG");
          pic.src = movies[i][col[j]];
          tabCell.className = "poster";
          tabCell.appendChild(pic);
        }else {
          tabCell.innerHTML = movies[i][col[j]];
        }
      }
    }
  }
}

function writeRowsOverall(table){

  for (var i = 0; i < movies.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length-1; j++) {

      var tabCell = tr.insertCell(-1);

      if(j == 0) {
        tabCell.innerHTML = i + 1;
      } else if (j == 1) {
        var pic = document.createElement("IMG");
        pic.src = movies[i][col[j]];
        tabCell.className = "poster";
        tabCell.appendChild(pic);
      } else {
        tabCell.innerHTML = movies[i][col[j]];
      }
    }
  }
}

function writeTable(table, tab){

  var divContainer = document.getElementById(tab);
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}

function CreateTableFromJSON(year, tab) {

  // Get the headers for each column
  extractHeaders();

  // Create the table
  var table = document.createElement("table");

  // Add the headers to the table
  writeHeaders(table);


  // Write each row of data for the chosen year
  if(year != 0) {
    writeRows(table, year);
  } else {
    writeRowsOverall(table);
  }

  // Add the table to the HTML
  writeTable(table, tab);
}
