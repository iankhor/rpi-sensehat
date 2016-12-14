var sense = require("sense-hat-led");
var sleep = require('sleep')

var X = [255, 0, 0];  // Red
var O = [255, 255, 255];  // White

var ledCanvas = [
O, O, O, X, X, O, O, O,
O, O, X, O, O, X, O, O,
O, O, O, O, O, X, O, O,
O, O, O, O, X, O, O, O,
O, O, O, X, O, O, O, O,
O, O, O, X, O, O, O, O,
O, O, O, O, O, O, O, O,
O, O, O, X, O, O, O, O
];

function displayCanvas() {
    sense.clear()
    sense.sleep(1)
    sense.setPixels(ledCanvas)

    setTimeout(displayCanvas,1000)   
}

function flashRed(){
  sense.clear([255, 0, 0]);
  sleep(0.1);
  sense.clear(); 
}

// displayCanvas()
flashRed()