var arr=[2,4,1,6,7,8,23,4,10];



// var newarr=arr.filter(function(num){
//     return num%2!=0; // filter function return boolean value
// });
// console.log(newarr);


// Custom filter function

function filterC(arr,callback){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

var newar =filterC(arr,function(val){
    return val%2!=0;
});
console.log(newar);
