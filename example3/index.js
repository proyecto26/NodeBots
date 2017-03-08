// Import the interface to Tessel hardware
const five = require("johnny-five");
const Tessel = require("tessel-io");

// Initialize the Board
const board = new five.Board({
  //sigint: false,
  //repl: false,
  io: new Tessel()
});

board.on("ready", function() {
  console.log("Testing...");

  var joystick = new five.Joystick({
    pins: ["B0", "B1"],
    freq: 500
  });

  joystick.on("change", function() {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log("--------------------------------------");
  });
});