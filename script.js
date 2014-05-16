var currentPlayer= 1;

var boardStatus = [0,0,0,0,0,0,0,0,0];


$("td").click(function(){
  if (boardStatus[$(this).data("id")] === 0){
      boardStatus[$(this).data("id")] = 1;
      $(this).html("O");
      console.log($(this).data("id"));
      console.log(boardStatus);
      var a = randomId();
      boardStatus[a]= 2;
      console.log(a);
      console.log(boardStatus);
      $("td:eq(" + a + ")").html("X");
      if (winGame() === true){
          alert("Player" + currentPlayer + "  Win!")
          console.log(winGame());
      }
      if ($.inArray(0, boardStatus) === -1 &&
          winGame()!== true){
          alert("Tie!")
      }
  }   
})
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

function winGame(){
  if ( boardStatus[0] === currentPlayer
    && boardStatus[3] === currentPlayer
    && boardStatus[6] === currentPlayer){
    return true;
  }
  if ( boardStatus[0] === currentPlayer
    && boardStatus[1] === currentPlayer
    && boardStatus[2] === currentPlayer){
    return true;
  }
  if ( boardStatus[3] === currentPlayer
    && boardStatus[4] === currentPlayer
    && boardStatus[5] === currentPlayer){
    return true;
  }
  if ( boardStatus[6] === currentPlayer
    && boardStatus[7] === currentPlayer
    && boardStatus[8] === currentPlayer){
    return true;
  }
  if ( boardStatus[2] === currentPlayer
    && boardStatus[5] === currentPlayer
    && boardStatus[8] === currentPlayer){
    return true;
  }
  if ( boardStatus[0] === currentPlayer
    && boardStatus[4] === currentPlayer
    && boardStatus[8] === currentPlayer){
    return true;
  }
  if ( boardStatus[2] === currentPlayer
    && boardStatus[4] === currentPlayer
    && boardStatus[6] === currentPlayer){
    return true;
  }
  if ( boardStatus[1] === currentPlayer
    && boardStatus[4] === currentPlayer
    && boardStatus[7] === currentPlayer){
    return true;
  }
}




