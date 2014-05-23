###  TicTacToe ###

================================================================================
Description:

Player can play with a computer, and player strats fist.  This is my first small game :), enjoy!

================================================================================
Packing list:

tic-tac-toe.html - HTML file for the web page.
script.js - Javascript that creats the game board, handles game logically.
stylesheet.css - Basic styles for the page.

================================================================================
Basic coding steps:

1. Convert 3*3 table to one dimension array boardStatus that represents the status of the table.
2. Once player click a dom, then update the array boardStatus and insert an "O".
3. Check the player's moving result. If there have alread been three "O" on horizontal, vertical and digonal direction, alert player win and reset the game.
4. If computer does not win ,check the computer's moving result again. If there have already been two "X" on horizontal, vertical and digonal direction. The computer occupies the empty position to make it win.
5. If computer cannot take the win step, check the player's moves prevent the player occupies the three dom on horizontal, vertical and digonal direction.
6. If both 5 and 6 does not satisfy, generate a randomId for computer.
7. Check wether the computer win or not using the same method mentioned in 3. 
