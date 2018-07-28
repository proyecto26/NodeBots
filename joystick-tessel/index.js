// Import the interface to Tessel hardware
const five = require("johnny-five");
const Tessel = require("tessel-io");
const display = require('display-tessel')

// Initialize the Board
const board = new five.Board({
  //sigint: false,
  //repl: false,
  io: new Tessel()
});

board.on("ready", function() {
  console.log("Testing...");

  var joystick = new five.Joystick({
    pins: ["B6", "B7"],
    freq: 1000
  });

  joystick.on("change", function() {
    display.update(`X=${parseInt(this.x)}`, `Y=${parseInt(this.y)}`)
  });
});