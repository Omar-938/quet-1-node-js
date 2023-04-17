const omarInfo = require('./information');


const cowsay = require("cowsay")

console.log(cowsay.say({
text : omarInfo.name + " " + omarInfo.campus,
e : "oO",
T : " U "
}));
