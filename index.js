const watch=require('./Components/Indiawatch');

//use set interval function to call the indianwatch after every second 
setInterval(watch.indianWatch,1000);

const usawatch = require('./Components/Usa watch');

//use set interval function to call the indianwatch after every second 
setInterval(usawatch.usaWatch,1000);

const chinawatch = require('./Components/Chinawatch');

setInterval(chinawatch.chinaWatch,1000);
