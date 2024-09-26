function animalCalc(depth){
var depth;
var animal = 0;
if(depth<=10){
    animal = depth * 50;
}
else if(depth <=20){
    var first10 = 10 * 50;
    var remain = depth - 10;
    var second= remain * 100;
    animal = first10 + second;

}
else {
    var first10 = 10 * 50;
    var second = 10 * 100;
    var remaining = depth - 20;
    var third = remaining * 300;
    var animal = first10 +second +third;
}
return animal;
}
var count = animalCalc(32)
console.log(count);