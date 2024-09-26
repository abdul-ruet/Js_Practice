// var name = ['kaiu', 'ragim', 'hasib', 'rahim'];


function reverseString(str){
    var reverse = "";
    for( var i =0; i< str.length; i++){

        var char = str [i];
        reverse = char + reverse ;

    }
    return reverse;

}
var name = "This is the best game";
var Inverse = reverseString(name);
console.log(Inverse);


