

$(document).ready(function(){
var gems = ["assets/images/gem1.jpg","assets/images/gem2.jpg","assets/images/gem3.jpg","assets/images/gem4.jpg"];

var numberToGuess = for(var i=9; i<120; i++){
  var random = Math.floor(Math.random())+1;
}//random 19-120

var counter = 0

var numbers = for(var i=1; i<12; i++){
  var random = Math.floor(Math.random())+1; // random 1-12

$("#number").text(numberToGuess);
  
  for (var i=0; i<numbers.length; i++){
    var imageCrystal = $("<img>");

    imageCrystal.attr("data-num", numbers[i]);

    imageCrystal.each(gems);

    imageCrystal.addClass("crystalImage");

    $("#gems").append(imageCrystal);
  }
  $(".crystalImage").on("click", function(){
    counter = counter + parseInt($(this).data("num"));

      $("#yourNumber").text(counter);

      if (counter == numberToGuess){
          alert("You won!!!");
        }else if ( counter > numberToGuess){
          alert("LOSER!");
        }
      });
  

});