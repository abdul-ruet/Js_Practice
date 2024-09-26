
function ArraySumFunction(arraySum){
var sum =0;
for(let i = 0; i < arraySum.length ; i++){
    var sum = sum + arraySum[i];
    console.log(sum);

}
return sum;
}
var number = [23,23,4,224,24,23];
var result = ArraySumFunction(number);
console.log("The total number is :",result);
