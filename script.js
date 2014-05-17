var x= 1;

var boardStatus = [0,0,0,0,0,0,0,0,0];


$("td").click(function(){
  if (boardStatus[$(this).data("id")] === 0){
      var clickId = $(this).data("id"); 
      updatePlayer(clickId);  
  }   
})

function updatePlayer(x){
  boardStatus[x] = 1;
  insertCharacter(x);
  checkPlayer(); 
}

function insertCharacter(x){
  if (boardStatus[x] === 1){
    $("td:eq(" + x + ")").addClass("insertStyle").html("O");
  }
  if (boardStatus[x] === 2){
    $("td:eq(" + x + ")").addClass("insertStyle").html("X");
  }
}

function checkPlayer(){
  if (gameStatus(1) === true){
    resetTable();
  } else{
    updateComputer();
  }
}

function updateComputer(){
  var computerId = randomId()
  boardStatus[computerId]= 2;
  insertCharacter(computerId);
  checkComputer(); 
}

function checkComputer(){
  if (gameStatus(2) === true){
    resetTable();
  }
}

function resetTable(){
  boardStatus = [0,0,0,0,0,0,0,0,0];
  $("td").html("");
}

function gameStatus(x){
  if (winGame(x) === true){
    alert("You Win!")
    return true;
  }
  if ($.inArray(0, boardStatus) === -1 &&
    winGame()!== true){
    alert("Tie!")
    return true;
    }
}

function generateNumber(){
  return Math.floor(Math.random() * 9);
}

function randomId(){
  var randomNumber = generateNumber();
  while (boardStatus[randomNumber] !== 0){
    randomNumber = generateNumber()
  } 
    return randomNumber;
}

function winGame(x){
  if ( boardStatus[0] === x
    && boardStatus[3] === x
    && boardStatus[6] === x){
    return true;
  }
  if ( boardStatus[0] === x
    && boardStatus[1] === x
    && boardStatus[2] === x){
    return true;
  }
  if ( boardStatus[3] === x
    && boardStatus[4] === x
    && boardStatus[5] === x){
    return true;
  }
  if ( boardStatus[6] === x
    && boardStatus[7] === x
    && boardStatus[8] === x){
    return true;
  }
  if ( boardStatus[2] === x
    && boardStatus[5] === x
    && boardStatus[8] === x){
    return true;
  }
  if ( boardStatus[0] === x
    && boardStatus[4] === x
    && boardStatus[8] === x){
    return true;
  }
  if ( boardStatus[2] === x
    && boardStatus[4] === x
    && boardStatus[6] === x){
    return true;
  }
  if ( boardStatus[1] === x
    && boardStatus[4] === x
    && boardStatus[7] === x){
    return true;
  }
}




