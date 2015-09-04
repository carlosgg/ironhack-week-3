var decode = require("./exercise-3.js");

var sentence = "fill the proper tank for the cow";


function superDecode(sentence, optionStr) {

	var words = sentence.split(" ");
	var opts = optionStr.split("-");
	var choose = opts[0];
	var direction = opts[1];

	
	// even or odd
	if (choose === "even") {
		words = words.filter(function(word, idx) {
			return idx % 2 == 1;
		});
	}else if (choose === "odd"){
		words = words.filter(function(word, idx) {
			return idx % 2 == 0;
		});
	}

	// direction
	if (direction === "backwards") {
		words = words.reverse();
	} 
	return decode(words);
}

console.log(superDecode(sentence, "odd-backwards"));

