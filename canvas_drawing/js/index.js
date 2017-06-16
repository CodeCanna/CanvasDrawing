window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');

  var brushColor = "black";   //Default brus color

  var clearCanvas = document.getElementById("clear").addEventListener("click", clear);

  var colors = {    //Brush Colors
    red: document.getElementById("red").addEventListener("click", colorPick),
    green: document.getElementById("green").addEventListener("click", colorPick),
    blue: document.getElementById("blue").addEventListener("click", colorPick),
    yellow: document.getElementById("yellow").addEventListener("click", colorPick),
    black: document.getElementById("black").addEventListener("click", colorPick)
  }

  /*
  var RED = document.getElementById("red").addEventListener("click", colorPick);
  var GREEN = document.getElementById("green").addEventListener("click", colorPick);
  var BLUE = document.getElementById("blue").addEventListener("click", colorPick);
  var YELLOW = document.getElementById("yellow").addEventListener("click", colorPick);
  var BLACK = document.getElementById("black").addEventListener("click", colorPick);
  */

  function colorPick(event) {
      //console.log(event.target);

      switch (event.target.id) {
        case "red":
          console.log("RED");
          brushColor = "red";
          break;

        case "green":
          console.log("GREEN");
          brushColor = "green";
          break;

        case "blue":
          console.log("BLUE");
          brushColor = "blue";
          break;

        case "yellow":
          console.log("YELLOW");
          brushColor = "yellow";
          break;

        case "black":
          console.log("BLACK");
          brushColor = "black";
          break;

        default:
          console.log("BLACK");
          brushColor = "black";
          break;

      }
/*
      if (event.target.id === "red") {
        console.log("Red button clicked");
        brushColor = "red";

      }else if (event.target.id === "green") {
        console.log("Green button clicked");
        brushColor = "green";

      }else if (event.target.id === "blue") {
        console.log("Blue button clicked");
        brushColor = "blue";

      }else if (event.target.id === "yellow") {
        console.log("Yellow button clicked");
        brushColor = "yellow";

      }else if (event.target.id === "black") {
        console.log("Black button clicked");
        brushColor = "black";
      }
      console.log(brushColor);
*/
  }

  function clear() {
    drawBrush(0, 0, canvas.width, canvas.height, "lightgray");
    console.log("SUPPOSED CLEAR");
  }

  function drawBrush(x, y, w, h, color) {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.fillStyle = color;
      ctx.fill();
  }

  function drawRoundBrush(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, )
  }

  function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  canvas.addEventListener("mousemove", function(event) {
      var mousePos = getMousePos(canvas, event);
      //console.log(mousePos);
      setInterval(function(){
        drawBrush(mousePos.x, mousePos.y, 10, 10, brushColor);
      }, 1);

  }, false);
}
