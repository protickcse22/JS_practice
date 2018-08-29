
function add(a,b){
    return a+b* this.num;
}

var obj1={
    num: 20
}
var obj2={
    num: 10
}
// Example of Bind method
var res1=add.bind(obj1);
console.log('Using Bind Method: '+res1(2,3));

// Example of Call method
var res2=add.call(obj1,2,3);
console.log('Using call Method: '+res2);

// Example of Apply method
var res3=add.apply(obj2,[2,3]);
console.log('Using apply method: '+res3);









