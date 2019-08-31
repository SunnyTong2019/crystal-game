/* 
*** Using JQuery ***

-declare variables:
 .randomNumber, totalScore,  wins, losses
 .variables to hold DOM elements

-initialize the game (function):
 .computer randomly generate a number from 19 to 120 for variable randomNumber, display in elementId="randomNumber"
 .computer randomly generate a number from 1 to 12 for each button's attribute "data-points"
 .totalScore goes back to 0, display in elementId="totalScore"

 -listen to click event:
 ..get the data-points of the clicked button and add to totalScore, dislay updated totalScore in elementId="totalScore"
 ..if totalScore === randomNumber:
   ...wins increases by 1, display it in elementId "wins"
   ...initialize the game
 ..if totalScore > randomNumber:
   ...losses increases by 1, display it in elementId "losses"
   ...initialize the game
*/


var randomNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;
var randomNumberEle = $("#randomNumber");
var totalScoreEle = $("#totalScore");
var winsEle = $("#wins");
var lossesEle = $("#losses");
var buttonEleArray= [$("#purple"), $("#yellow"), $("#red"), $("#green")];

function initGame () {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    randomNumberEle.text(randomNumber);

    for (var i=0; i<buttonEleArray.length; i++)
    {
        var randomDataPoints = Math.floor(Math.random() * 12) + 1;
        buttonEleArray[i].attr("data-points", randomDataPoints);
    }

    totalScore = 0;
    totalScoreEle.text(totalScore);
}

initGame();

$("button").on("click", function () {

  var dataPoints = $(this).attr("data-points");
  dataPoints = parseInt(dataPoints);
  totalScore += dataPoints;
  totalScoreEle.text(totalScore);

  if(totalScore === randomNumber) {
      wins++;
      winsEle.text(wins);
      initGame();

  } else if (totalScore > randomNumber) {
    losses++;
    lossesEle.text(losses);
    initGame();
  }

});