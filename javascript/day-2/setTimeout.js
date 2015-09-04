function blastOff (count){ // count = 5

	// recursive function
	function printNum() {
		if (count === -1) {
			console.log("Fireeee"); // exit way of recursion
		} else { 
			console.log(count);
			count -= 1;
			setTimeout(printNum, 500); // recursive way
		}
	}
	printNum(); 
}

blastOff(5); // milisegundos