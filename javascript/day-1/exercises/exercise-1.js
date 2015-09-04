var numbers = "2:10:16:20";
//var result = calculateStats(numbers);

function myFunction(numbers) {
	
	var split = numbers.split(":");

	/* // convert to int using map forma 1
	var nums = [];
	for(i=0; i<split.length; i++) {
		num.push( parseint(split[i]) );
	}
	*/

	// convert to int using map forma 2
	var nums = split.map(function(str) {
		return parseInt(str);
	});
	
	var sumTotal = 0;
	for(i=0; i<split.length; i++) {
		sumTotal = sumTotal += nums[i];
	}
	
	var average = sumTotal / nums.length;

	var maxNum = nums.sort(function(a,b){
		return b-a;
	});

	console.log("La media es: " + average);
	console.log("La suma total es: " + sumTotal);
	console.log("El número mas alto es: " + maxNum[0]);
}

myFunction(numbers);
