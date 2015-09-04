

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
/*
function decode(words) {
	
	secretMessage = "";

	for( i = 0; i < words.length; i++ ) {
		secretMessage += words[i].charAt(i%5);
	}
	return secretMessage;
}

console.log(decode(words));
*/
////////////////////////////

function decode2(words) {
	
	secretMessage2 = "";

	for(var i=0; i<words.length; i++) {
		var word = words[i];
		var charIndex = i % 5;
		var letter = word.charAt(charIndex);
		secretMessage2 += letter;
	}
	return secretMessage2;
}

/*  explicaion reminder %
	if(i === 5){
		i = 0;
	}
*/

var secretMessage2 = decode2(words);
console.log(secretMessage2);