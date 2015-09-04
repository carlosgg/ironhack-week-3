words = [
	"dead", //1st
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];

function decode(words) {
	
	secretMessage = "";

	for(var i=0; i<words.length; i++) {
		var word = words[i];
		var charIndex = i % 5;
		var letter = word.charAt(charIndex);
		secretMessage += letter;
	}
	return secretMessage;
	console.log("ok");
}

var secretMessage = decode(words);
console.log(secretMessage);


module.exports = decode;