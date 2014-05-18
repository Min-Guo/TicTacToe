var boardStatus = [0,0,0,0,0,0,0,0,0];

var player =1;

var computer = 2;

$("td").click(function(){
  if (boardStatus[$(this).data("id")] === 0){
    var clickId = $(this).data("id");
    main(clickId);  
  }   
})

function main(clickId){
  handlePlay(clickId, player);
  if (checkResult(player) === true){
    resetTable();
  } else{
    var computerId = randomId();
    handlePlay(computerId, computer);
    if (checkResult(computer) === true){
      resetTable();
    }
  }
}

function handlePlay(id, currentPlayer){
  boardStatus[id] = currentPlayer;
  insertCharacter(id);
  return checkResult(currentPlayer); 
}

function insertCharacter(id){
  if (boardStatus[id] === 1){
    $("td:eq(" + id + ")").addClass("insertStyle").html("O");
  }
  if (boardStatus[id]  === 2){
    $("td:eq(" + id + ")").addClass("insertStyle").html("X");
  }
}

function checkResult(currentPlayer){
  if (winGame(currentPlayer) === true){
    if (currentPlayer === 1){
      alert("Player Win!")
      return true;
    }
    if (currentPlayer === 2){
      alert("Computer Win!")
    return true;
    }
  if ($.inArray(0, boardStatus) === -1 &&
    winGame(currentPlayer)!== true){
    alert("Tie!")
    return true;
  }
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

function winGame(currentPlayer){
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

function resetTable(){
  boardStatus = [0,0,0,0,0,0,0,0,0];
  $("td").html("");
}


