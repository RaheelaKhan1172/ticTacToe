var playing = false;
var oSelect = false;
var xSelect = false;
var humanTurn = false;
var compTurn = false;

function toggleFunctions() {
  compTurn === true ? //function for compTurn // : handleHumanMoves();

}

function toggleTurns() {
  compTurn = (compTurn === true) ? false : true;
  humanTurn = (humanTurn === true) ? false : true;
    //call function for comp to choose move
  toggleFunctions();
}

function updateView(tar) {
  if (!tar.className.includes('fa-circle-o') && !tar.className.includes('fa-times')) {
     oSelect === true? (tar.className += " fa-circle-o") : (tar.className += " fa-times");
  } else {
      console.log('hm');
  }
  toggleTurns();
}

function handleHumanMoves() {
  $("table").on('click',function(event) {
    console.log(event.target.children[0]);
    if (event.target.children[0] !== undefined) {
    var tar = event.target.children[0];
    updateView(tar);
    }
  });
}

function selectXorO() {
  var selection = "";
  //code in current state causes click event to be fired multiple times
  $("#myModal").on('show.bs.modal',function(event) {
     $("button").on('click',function(event) {
      selection = event.target.id;
      console.log(selection);
      if (selection === "o") {
        oSelect = true;
      } else {
        xSelect = true;
      }
      handleHumanMoves();
    }); 
  });
}

function compSelect() {
  xSelect = true; 
  console.log('im gonna win!',xSelect);
  //call function to choose first move;
}

function handleClick(event) {
  restartBoard();
  playing = true;
  var t = event.target.id;
  console.log(t);
  switch(t) {
    case "hum":
      //function
      humanTurn = true;
      selectXorO();
    break;
    case "comp":
      compTurn = true;
      compSelect();
    break;
  }
}

function restartBoard() {
  //restart the board
  console.log('why did you click me~');
}

 document.getElementById("selection").addEventListener('click',handleClick,false);
