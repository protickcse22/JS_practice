var arr=[2,4,1,6,7,8,23,4,10];


var newarr= arr.map(function(a){
    return a+2;
});
console.log(newarr);


// custome  Map function

function mapC(arr,callback){
    var newarray=[];
    for( var i=0;i<arr.length;i++){
       
            newarray.push(callback(arr[i]));
        }
    return newarray;
}

var anaray= mapC(arr,function(a){
    return a+2;
});
console.log(anaray);





