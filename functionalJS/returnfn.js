

function geeting(msg){
    return function(name){
        console.log(msg+' '+name);
    }
}

var a=geeting('Good morning')
a('Protick');

