


// Number length;
function lenNum(num){
    count=1;
for(i=1;i<num;i*=10){
    count++; 
    }
    console.log(count);
}
 
// Faktorial
function factNum(num){
    result=1;
for (i=1; i<num; i++){
    result*=num;
}
console.log(result);
}

//Pentagon məsələsi
function pentagon(num){
    sum=0;
    for(i=0; i<=(num-1); i++){
    sum+=i;
}
result=(5*sum)+1;
console.log(result);
}

/* var array,left = [];
array=[1,2,3,4,5,6,7,8,9,10,11]
left.push(array.shift()); // sol terefi duz
left.push(array.shift());
left.push(array.shift());
left.push(array.shift());
left.push(array.shift());
left.push(array.shift());
console.log("left: "+left);
console.log("array: "+ array);

array.push(left.pop());

array.push(left.shift());
array.push(left.shift());
array.push(left.shift());
array.push(left.shift());
array.push(left.shift());

console.log(array); */


function arrayRevert (){
var array = [];
var left = [];
for(i=0; i<(arguments.length); i++){
array.push(arguments[i])
}

for(i=0; i<(arguments.length/2); i++){
left.push(array.shift());
}
console.log("ilk array: " + array);
console.log("ilk left: " + left);


if (arguments.length%2==0){
    //do bunu
    for (i=0; i<(argument.length/2); i++){
        array.push(left.shift());
    }
}
else if (arguments.length%2==1){
    //do bunu 
    array.push(left.pop());
    for (i=0; i<(argument.length/2); i++){
        array.push(left.shift());
    }
}
console.log("son array: "+array);
}