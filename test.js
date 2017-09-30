
var model = {
    boardSize: 10,
    numShips: 3,
    subLength: 3,
    bSLength: 4,
    aCLength: 5,
    shipsSunk: 0,

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0, 0], hits: ["", "", "", ""] },
        { locations: [0, 0, 0, 0, 0], hits: ["", "", "", "", ""] }
    ],

    fire: function(guess) {

        for(var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

            // check if a ship location has already been hit
            if ( ship.hits[index] === "hit" ) {
                view.displayMessage("Oops, you already hit that location");
                return true;
            } else if ( index >= 0 ) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if ( this.isSunk(ship) ) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
            //$('#guessInput').focus();
        }
        var cell = document.getElementById(guess);
        cell.setAttribute("class", "miss");
        view.displayMessage("You Missed");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        $('#guessInput').focus();
        return true;
    },
};


var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);

        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
};

// helper function to parse a guess from the user
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}



var person = prompt("Please enter your name:", "Alice");
if (person == null || person == "") {
        alert("Using Default name Alice");
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
//document.getElementById("demo").innerHTML = txt;

var sP = prompt("Please enter your Ship Placement:");
var sP1 = sP.split(";");
var patt1 = /\d/g;
var result = sP1[0].match(patt1);

var person2 = prompt("Please enter your name:", "Bob");
if (person2 == null || person2 == "") {
        alert("Using Default name Bob");
    } else {
        txt = "Hello " + person2 + "! How are you today?";
    }
//document.getElementById("demo").innerHTML = txt;

var sP = prompt("Please enter your Ship Placement:");
var sP1 = sP.split(";");
var patt1 = /\d/g;
var result = sP1[0].match(patt1);


//Creating the Table
document.write('<table id="myTable">');
var gridWidth = 10;
var gridHeight = 10;
var grid = [];
for(var y = 0; y < gridHeight; y++)
{
    document.write('<tr>');
    grid.push([]);
    for(var x = 0; x < gridWidth; x++)
    {
        document.write('<td class=clear id='+y+x+' onclick="model.fire('+y+x+')">');
        grid[y].push(0);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//Referring the table which was just created.
var x=document.getElementById('myTable').rows;
//var y=x[result-1].cells;
//y[0].innerHTML="A"

document.write('<table id="space">');   
    var x = 10;
    while(x>0){
        document.write('<tr>');
        document.write('</tr>');
        x--;
    }
document.write('</table>');


//Creating the Table
document.write('<table id="myTable2">');
var gridWidth = 10;
var gridHeight = 10;
var grid2 = [];
for(var y = 0; y < gridHeight; y++)
{
    document.write('<tr>');
    grid2.push([]);
    for(var x = 0; x < gridWidth; x++)
    {
        document.write('<td onclick="alert(\'Click the board above!\'+grid2[y]);">');
        grid2[y].push(0);
        //model.fire();
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//Referring the table which was just created.
var x=document.getElementById('myTable2').rows;
//var y=x[result-1].cells;
//y[0].innerHTML="A"

