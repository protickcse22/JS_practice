// var name='protick';
// var num=10;
// var skills=['html','css','node.js','C','C+++'];
// console.log(name);
// console.log(typeof name);
// console.log(typeof skills);
// console.log(typeof num);

// skills.splice(1,1,'Java');
// console.log(skills);

// var skills=['html','css','node.js','C','C++'];

// function traverse(list,callback){
//     for(var i=0;i<list.length;i++){
//         callback(list[i]);
//     }
// }

// traverse(skills,function(skl){
//     console.log(skl.toUpperCase());
//     });

// var person={
//     name: 'protick',
//     age: 25,
//     skills: ['html','css','node.js','C','C++'],
//     print: function(){
//         console.log("Name: "+this.name+", Age: "+this.age+", Skills: "+this.skills);
        
//     }

// };
// for (var i in person){
//     console.log(person[i]);
    
// }

//Objective array
var person1=[
    {
        name: 'protick',
        age: 25
    },
    {
        name: 'Prionti',
        age: 21
    }    
];

person1.forEach(function(name){
    console.log(name.name.toUpperCase());
    
});


