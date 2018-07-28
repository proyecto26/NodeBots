const five = require("johnny-five")
const Tessel = require("tessel-io");

const board = new five.Board({ io: new Tessel() })

board.on("ready", function () { 
    lcd = new five.LCD({ 
        pins: ["a2", "a3", "a4", "a5", "a6", "a7"]
    })
    //updateDisplay("Hola Mundo", "@MedellinJS")
}); 

const updateDisplay = (row1, row2) => { 
    lcd.cursor(0, 0).print(row1)
    lcd.cursor(1, 0).print(row2)
}; 

module.exports = { 
    update: updateDisplay
};