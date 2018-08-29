var arr=[22,19,21,33,44,37,6,11,10];
arr.sort(function(a,b){
    return a-b; // Accendinf order
})

console.log(arr);

arr.sort(function(a,b){
    return b-a; // Decenting Order
})

console.log(arr);

var info=[
    {name: 'HM Nayem', age: 22},
    {name: 'Abir Azim', age: 23},
    {name: 'Jubel Ahmed', age: 18},
    {name: 'Al Rafi', age: 19},
    {name: 'Mr. X', age: 33},
    {name: 'Mr. Y', age: 27}
];

info.sort(function(a,b){
    return a.age-b.age;
});

console.log(info);


info.sort(function(a,b){

    if(a.name>b.name){
        return 1;
    }
    else if(a.name<b.name){
        return -1;
    }
    else{
        return 0;
    }
});
console.log(info);






