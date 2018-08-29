// var obj={};
// var obj1=new Object;
// console.log(obj);
// console.log(obj1);

var book={
    name: 'Functional Javascript',
    author: 'Micbael Fogus',
    publisher: 'O\'Reilly',
    page: 250,
    print: function(){
        console.log(this.name+' '+this.author);
        
    }
}

console.log(book);

book.print();

book.publishYear= 2010;
book['price']='300$';

for(var props in book){
   // console.log(props);

    // When we print value of properties then,
    console.log(props+' = '+book[props]);
    
    
}


