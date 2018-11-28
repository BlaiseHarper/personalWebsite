//Number Guessing numberGame
//Blaise Harper
//11-28-18

window.onload = function(){
  var y = Math.floor(Math.random() * 10 + 1);
  var guess = 1;
  document.getElementById("submitguess").onclick = function() {
    var x = document.getElementById("guessField").value;
    if (x == y) {
      alert("Congratulations! You get a cookie! It only took you " +
        guess + " tries!");
    } else if (x > y) {
      guess++;
      alert("Not quite. A little smaller");
    } else {
      guess++;
      alert("Too big yo");
    }
  };
};
