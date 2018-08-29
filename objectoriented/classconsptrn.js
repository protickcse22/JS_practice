
// Object creation using constructor pattern

// function Person(name,email){
//     this.name=name;
//     this.email=email;
//     this.print= function(){
//         console.log('Name : '+this.name+'\nEmail: '+this.email);
//     }
// } 

// var p1=new Person('Protick','kprotickju22@gmail.com');
// var p2=new Person('Prionti','cloudypriyonty22@gmail.com');

// var people=[p1,p2];

// console.log(people);

// people.forEach(function(props){
//     //console.log('Email: '+props.email);
//     props.print();
     
// });


function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Functional Javascript', 'Micbael Fogus', 30);


// If we can see the constructor
console.log(book.constructor);




