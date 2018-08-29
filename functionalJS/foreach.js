// Builtin for each

var arr=[2,4,1,6,7,8,23,4,10];

arr.forEach(function(a,b,c){
   console.log('Element is: '+a+' Index is: '+b+' Aaary is: '+c);
   
});

// Custom forEach

function forEachC(arr, callback){
    for(var i=0;i<arr.length;i++){
        callback(arr[i],i);
    }
}

forEachC(arr,function(a,b){
    console.log('Element: '+a+'  Index: '+b);
    
})

