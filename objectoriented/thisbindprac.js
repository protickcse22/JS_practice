var obj = {
        name: 'Twinkle Cats',
    
        print: function() {
            console.log(this);
        }
    }
obj.print();
    



// var person = {
//         name: 'Protick', 
    
//         print: function() {
//             console.log(this);
//             console.log('Hello, ' + this.name);
//         }
//     }
    
//     var obj=person.print.bind(person);
//     console.log(obj);
//     obj();
    
// Bind Example

// function add(num){
//     console.log(this);
//     return this.value+num;
// }
// var obj={
//     value: 100
// }
// var binded=add.bind(obj);
// var res=binded(30);
// console.log(res);

// var person = {
//     name: 'Twinkle Cats',

//     print: function() {
        
//         // var name = this.name;
//         setTimeout(function() {
            
//             console.log(this);
//             console.log('Hello, ' + this.name);

//         }.bind(this), 2000);//bind na korle conflict korbe

//     }
// }