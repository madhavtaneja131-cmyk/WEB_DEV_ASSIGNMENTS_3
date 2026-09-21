function logger(msg){
    let time = new Date().toLocaleTimeString();
    console.log(time + " - " + msg);
}

module.exports = logger;