const crypto = require("crypto")

function Dice() {
    console.log("Generating Random Number")
    console.log()
    const dice = crypto.randomInt(1, 7)
    console.log("Random Number Generated")
    console.log()
    console.log("Dice Rolled: ", dice)
}

module.exports = { Dice }

for (let i = 1; i <= 5; i++) {
    console.log("---- Roll " + i + " ----")
    Dice()
}