/* 
*** Using JQuery ***

-declare variables:
 .randomNumber, data-points, totalScore,  wins, losess
 .variables to hold DOM elements

-initialize the game (function):
 .computer randomly generate a number from 19 to 120 for variable randomNumber, display in elementId="randomNumber"
 .computer randomly generate a number from 1 to 12 for variable data-points and assign to each img
 .totalScore goes back to 0, display in elementId="totalScore"

 -listen to click event:
 ..get the data-points of the clicked img and add to totalScore, dislay updated totalScore in elementId="totalScore"
 ..if totalScore === randomNumber:
   ...wins increases by 1, display it in elementId "wins"
   ...initialize the game
 ..if totalScore > randomNumber:
   ...losess increases by 1, display it in elementId "losses"
   ...initialize the game
*/

