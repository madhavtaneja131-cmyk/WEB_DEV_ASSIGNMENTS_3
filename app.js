const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("App started");

let num = 10;

if(isEven(num)){
    logger(num + " is even");
} else {
    logger(num + " is odd");
}

logger("App finished");