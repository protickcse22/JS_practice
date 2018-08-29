//First Class function practice


// A funtion can be stored in a variable
 function sayname(name){
    return 'Hello '+name;
 }
 var name=sayname;
 var c=name('protick');
 console.log(c);
 
// A funtion can be stored in an Array

arr=[1,2,3];
arr.push(name);
console.log(arr);

// A funtion can be stored as an object Field or property

var person={
    name: 'Hello',
    fname: name
}
person


// We can create functionas needed

var sum= 10+ (function(){return 20})();  // Self Invoking function
sum

// We can pass a function as an argument  
// callback funtion

function test(nm,name){
    return name(nm);
}

test('Protick',function(names){
    console.log(names);
    
});


// We can return function from another function
//    Higher order functon

function base(b){

    return function(num){

        var res=1;
        for (var i=0;i<b;i++){
            res*=num;
        }
        return res;
    }

}

// var num=base(3);
// var pow=num(10);
// pow

var rs=base(2)(10);
rs;






