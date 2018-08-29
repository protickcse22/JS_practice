var arr=[2,4,1,6,7,8,23,4,10];

var res= arr.reduce(function(a,b){  //Reduce function take's two parameter
    return a+b;
});
console.log(res);

function reduceC(arr,callback){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=callback(arr[i]);
    }
    return sum;
}
var res1=reduceC(arr,function(b){
    return b;
})
console.log(res1);




