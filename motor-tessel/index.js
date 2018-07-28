var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
    var motor = new five.Motor('B6');
    // Start the motor at maximum speed
    motor.start(255);
});