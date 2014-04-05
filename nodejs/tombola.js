// @author Fabian @fabiantheblind Morón Zirfas
// @license MIT

var fs = require('fs'); // inclide the filesystem module

// this list was for testing purpose
// var list = ["Duffy Duck","Bart Simpson","Bender Bending Rodríguez","Gabriel García Márquez","Massimo Banzi","J. Johna Jameson"];
//
// Read the names.txt file and split it into an array
var list = fs.readFileSync("../_private/names.txt", 'utf8').split('\n');
// console.log(lines);

// shuffle function object
 var shuffler = function(array) {
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// some logging
console.log("\n------------\nOriginal List:\n" + list +"\n");
shuffler(list);
console.log("Shuffeld List:\n"+ list + "\n");

// sorry only 15 people for the course.
// 5 already enlisted last semester
var sliced = list.slice(0,10);
// log the winners
console.log("And the Winners are:\n\n"+ sliced +"\nwoohoo! \\o/\n");

// prepare it for markdown posting in incom.org again
for(var i = 0; i < sliced.length;i++){
  sliced[i] = "- " +sliced[i] + "  ";
}

// write to file
// http://stackoverflow.com/questions/17324797/write-in-a-text-file-without-overwriting-in-fs-node-js
fs.writeFileSync("result.txt", sliced.join("\n"), "UTF-8",{'flags': 'w+'});
