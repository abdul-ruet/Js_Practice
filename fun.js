function lagreNumber(numbers){
    var larger = numbers[0];
    for(var i =0; i< numbers.length; i++){
        console.log(numbers[i]);
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
        //console.log(element);
    } 
    return larger;
}
var num1 = [12,33,23442,443,5235];
var result = lagreNumber(num1);
console.log(result);