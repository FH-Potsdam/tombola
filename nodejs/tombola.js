// see http://stackoverflow.com/questions/17324797/write-in-a-text-file-without-overwriting-in-fs-node-js
// and http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var fs = require('fs');

var list = ["Duffy Duck","Bart Simpson","Bender Bending Rodríguez","Gabriel García Márquez","Massimo Banzi","J. Johna Jameson"];


 var shuffler = function(array) {
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

console.log("\n------------\nOriginal List:\n" + list +"\n");
shuffler(list);
console.log("Shuffeld List:\n"+ list + "\n");


var sliced = list.slice(0,3);
console.log("And the Winners are:\n\n"+ sliced +"\nwoohoo! \\o/\n");

for(var i = 0; i < sliced.length;i++){
  sliced[i] = "- " +sliced[i] + "  ";
}


fs.writeFileSync("result.md", sliced.join("\n"), "UTF-8",{'flags': 'w+'});
