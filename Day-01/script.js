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

function isPrime(n){
	if (n < 3) return true;
	for(var index=2; index <= (n/2); index++){
		if (n % index === 0){
			return false;
			break;
		}
	}
	return true;
}

function sum(list){
	var result = 0;
	for(var index = 0, count = list.length; index < count; index++){
		result += list[index];
	}
	return result;
}

function getEvenNumbers(list){
	var evenNumbers = [];
	for(var index = 0, count = list.length; index < count; index++){
		if (list[index] % 2 === 0){
			evenNumbers.push(list[index]);
		}
	}
	return evenNumbers;
}

/*function getOddEvenCount(list){
	var evenCount = 0, 
		oddCount = 0;
	for(var index = 0, count = list.length; index < count; index++){
		if (list[index] % 2 === 0){
			++evenCount;
		} else {
			++oddCount;
		}
	}
	return {
		even : evenCount,
		odd : oddCount
	}
}*/

/*function getOddEvenCount(list){
	var result = {
		even : 0,
		odd : 0
	};
	for(var index = 0, count = list.length; index < count; index++){
		if (list[index] % 2 === 0){
			++result.even;
		} else {
			++result.odd;
		}
	}
	return result;
}*/

function getOddEvenCount(list){
	var result = {
		even : 0,
		odd : 0
	};
	for(var index = 0, count = list.length; index < count; index++){
		var key = list[index] % 2 === 0 ? 'even' : 'odd';
		++result[key];
	}
	return result;
}

var products = [
    {id : 100, name : 'Pen', cost : 5, category:'stationary'},
    {id : 101, name : 'Pencil', cost : 2, category:'stationary'},
    {id : 102, name : 'Marker', cost : 35, category:'stationary'},
    {id : 201, name : 'Veg', cost : 100, category:'grocery'},
    {id : 202, name : 'Lentil', cost : 50, category:'grocery'},
    {id : 301, name : 'Shirt', cost : 300, category:'apparel'},
    {id : 302, name : 'Pants', cost : 600, category:'apparel'},
    {id : 401, name : 'Hammer', cost : 250, category : 'utility'}
];

function aggregateProducts(products){
	var result = {};
	for(var index=0, count=products.length; index < count; index++){
		var key = products[index].category;
		/*if (typeof result[key] === 'undefined')
			result[key] = 0;*/
		result[key] = result[key] || 0;
		result[key] += products[index].cost;
	}
	return result;
}
// => {stationary : sum of stationary products, 
//		grocery : sum of grocery products...}
