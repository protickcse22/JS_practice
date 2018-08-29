//inner function

// function outer(){
//     function inner(){
//         console.log('Inner function');   
//     }
//     inner();
//     console.log('Outer function');
// }
// outer();

//Example of inner functon

function allsum(a,b){
    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function mul(){
        return a*b;
    }
    function div(){
        return a/b;
    }

    console.log(sum()+sub()+mul()+div());
    
}
allsum(10,5);

// Object return

function objectreturn(){
    return {

        fname: 'protick',
        lname: 'Kumer Dey',
        print: function(){
            console.log(this.fname+' '+this.lname);
            
        }
    }
}

var obj=objectreturn();
obj.print();



