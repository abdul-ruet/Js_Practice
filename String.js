var speech = "Lionel Messi is the greatest player ever.";
// console.log(speech.length);
// console.log(speech[3]);
var count = 0;
for(var i = 0; i<speech.length; i++){

    var char = speech [i];
    if(char == " " && speech[i-1] != " "){
         count++;
    }
}
count++;
console.log(count);

