// window.alert("Bismillah");
// var x
// x = prompt('Write a value')
// document.write(x)

// For Loop
// let username = prompt("User Name");
/*
let username = "Abu Taher";
let food = ["Banana", 'Apple','Grape'];
for(let i=1 ; i<= food.length; i++){
    console.log(`Index : ${i}`)
}*/
/*let username = "Abu Taher";
let food = ["Banana", 'Apple','Grape'];
let myself = {name:'Abu Taher', profession:'Frisking', country:'Bangladesh',age:27}*/
//For-in effect on string/array/object 
//for-of effect on string/array 
/*
//we will get index number
for(let x in username){
    //console.log(`index: ${x}`);
    console.log(`index: ${x} and item=> ${username[x]}`);
}
for(let x in food){
    // console.log(`index: ${x}`);
    console.log(`index: ${x} and item=> ${food[x]}`);
}

//we will get item/Valus
for(let x of username){
    console.log(`index: ${x} `);
}
for(let x of food){
    console.log(`index: ${x}`);
}
for(let x in myself){
    console.log(`property: ${x} and value: ${myself[x]}` );
}
*/
// Sum serise number

/*let p = parseInt(prompt('Enter a Num Val'));
let sum = 0;
let serise = '';
if(Number.isInteger(p)){
    for(let x=1; x <= p; x++){
        // console.log(params.toString()+ "+");
        sum += x**2;
        serise += (x**2).toString();
        if(x == p ){continue;}
        serise += " +";
    }

    console.log(`${serise} = ${sum}`);
}
else{
    console.log('Input should be a number');
}*/

/*/ function
let func1 = ($param) => {
    return 'Result is: ' + $param;
}
console.log(func1('Bismillah'));
*/
/*
let strArr = ['One', 'Two', 'Five', 'Nine'];
let numArr = [2, 4, 7, 8];*/
//1st param = item default, would not be changed
//2nd param = index default, would not be changed
//3rd param = array default, would not be changed
/*function FuncPrint(item, index, arr){
    console.log(`index : ${ index+1 } Item : ${ item } Array : ${ arr }`);
    }
strArr.forEach( FuncPrint );*/

//Map array
/*function MapFunc(item) {
    return `${item} is array element`;
}
let result = strArr.map(MapFunc);
console.log(result);*/
/*
let SquareArr =numArr.map(function(item) {
    return item*item;
});
console.log(SquareArr);
*/

// Math Object
let val = Math.PI;
val = Math.E;
val = Math.round(3.1);
val = Math.ceil(3.1);
val = Math.floor(3.1);
val = Math.sqrt(16);
val = Math.abs(-16);
val = Math.pow(3,2);
val = Math.min(3,2,-2);
val = Math.max(3,2,22,-2);
val = Math.floor(Math.random(3)*1000);
console.log(val);