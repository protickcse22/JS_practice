
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person.prototype.hello = function () {
//     console.log('Hello ' + this.name);
// }

// Person.prototype.print = function () {
//     console.log('Name: ' + this.name + ' Age: ' + this.age);
// }

Person.prototype={
    print: function(){
        console.log('Name: ' + this.name + ' Age: ' + this.age);
    },
    email: 'kprotickju22@gmail.com'
}


var p1=new Person('Protick Kumer Dey',24);
var p2=new Person('Prionti Saha',20);



