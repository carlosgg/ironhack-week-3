/*

var foods = ['pizza', 'cookies', 'bread'];

var capsFoods = foods.map(function(food){
	return food.toUpperCase();
})

console.log(capsFoods);

/////////////////////////////

function doubles(x) {
	return x * 2;
}
var x2 = doubles(5);

console.log(x2);

/////////////////////////////

var nums = [1,2,3,4];

var nums2 = nums.map(doubles);
console.log(nums2);

//////////////////////////// 

var foods = ['pizza', 'cookies', 'bread'];

var foodsUppercase = foods.map(function(food) {
	return food.toUpperCase();
});
console.log(foodsUppercase);

/////////////////////////////   

var a = [1,2,3];

function multArray(arr,num){
	
	function f(x) {
		return x * num;
	}

	var total = arr.map(f);

	return total;
}
console.log(multArray(a,4));

/////////////////////////////   
function hello(){
	console.log("hello");
}

function call(f){
	f();
	f();
	f();
}

call(hello);  //hello hello hello

///////////////////////////// 

var a = [1, 2, 3];

function myLog (x) {
	console.log(x);
}

function myForEach(arr, func) {
	for (i=0; i < arr.length; i++) {
		func(a[i]);		
	}
}

myForEach(a, myLog);

////// is the same

function myForEach2(arr, func) {
	arr.forEach(func);
}

myForEach2(a, myLog);

///////////////////////////// */




