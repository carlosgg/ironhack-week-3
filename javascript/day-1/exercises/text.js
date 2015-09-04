function test_food(food){
	console.log(process.argv)
	if (food === "pizza"){
		console.log("Yay " + food);
	}else if(food === "Cookies"){
		console.log(food + " are good too");
	}else if(food === "Brussel donuts"){
		console.log("Mmmmm I like " + food);
	}else{
		console.log("Arggggg, I don't like " + food);
	}
}


test_food("eggs")



