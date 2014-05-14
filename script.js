var currentPlayer= 0;

var boardStatus = [0,0,0,0,0,0,0,0,0];

function player1choice(){
  currentPlayer =1;
}
function player2choice(){
  currentPlayer =2;
}

$("td").click(function(){
  if (currentPlayer !== 0 &&
    boardStatus[$(this).data("id")] === 0){
      boardStatus[$(this).data("id")] = currentPlayer;
      $(this).html(currentPlayer);
      console.log($(this).data("id"));
      console.log(boardStatus);
        if (winGame() === true){
          alert("Player" + currentPlayer + "  Win!")
          console.log(winGame());
        }
  }
})

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

