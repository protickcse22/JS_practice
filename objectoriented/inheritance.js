// function Person(){
//     this.name='Protick';
// }

// function teacher(){
//     Person.call(this); // Inheritance 
//     this.subject='Javascript';
// }

// var teacher=new teacher();
// console.log(teacher);


function Person(name){
    this.name=name;
}

Person.prototype.printName=function(){
    console.log('Hello, '+this.name);
}


function Student(name,id){

    Person.call(this,name);
    this.id=id;

}

Student.prototype=Object.create(Person.prototype);  // for inherite method
Student.prototype.constructor=Student;


var student=new Student('Protick',48);
student.printName();

