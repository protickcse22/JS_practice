// function hello(name){
//     print("Hello "+name);
// }
// function print(args){
//     console.log(args);
    
// }
// hello('pritick');

// pure call back
// function hello(name,print){
//     print(name);
// }


// hello('protick',function(args){
//     console.log('Hello '+args);
// });

// hello('protick',function(args){ //same function parameter but different manupulation that's why it's called callback function
//     console.log('Hello '+args+' lenght of '+args+' is ' +args.length);
// });

// var person={
//     name: 'protick',
//     age: 17,
//     email: 'kprotickju22@gmail.com'
// }


// function printInfo(obj,callbackfn){

//     console.log("Person name: "+obj.name+'Person age: '+obj.age);
//     if(obj.age>=18){
//         callbackfn(obj.email);}
//     else{
//         console.log('You are too little.....');
        
//     }
//     }
    
// printInfo(person,function(email){
//     console.log('Your email is send to '+email);
    
// })


// More then one callback function in a function parameter

function print(data,callback1,callback2){
    console.log('Original data: '+data);
    callback1(data);
    callback2(data);
}

print('Protick Kumer Dey',function(name){
    //var a=name.toUpperCase();
    console.log("Yous data's upper format: "+name.toUpperCase()); 
},function(name){
    console.log("Yous data's lower format: "+name.toLowerCase());
});







