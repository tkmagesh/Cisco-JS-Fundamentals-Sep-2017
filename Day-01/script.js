function add(x, y){
	var result;
	result = x + y;
	console.log(result);
}
function multiply(x,y){
	console.log(x * y);
}

add(100,200);

add(10,20)
add('this is', ' a sentence!');

console.log('typeof document -> ', typeof document);
console.log('typeof window -> ', typeof window);

var numbers = [4,3,8];
console.log('typeof numbers -> ', typeof numbers);

function isOddOrEven(n){
	if (n % 2 === 0){
		return 'even';
	} else {
		return 'odd';
	}
}

function greet(hour){
	switch (hour){
		case 10:
			console.log('Good Morning!');
			break;
		case 16:
			console.log('Good Afternoon!')
			break;
		default:
			console.log('Good Night!');
			break;
	}
}
function printEvenNumbers(){
	for(var i=0; i <= 20; i+=2)
		console.log(i);
}