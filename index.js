const obj = require('./information');


const cowsay = require("cowsay")

console.log(cowsay.say({
text : obj.name + " " + obj.campus,
e : "oO",
T : " U "
}));
