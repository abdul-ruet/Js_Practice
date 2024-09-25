var marks = [10,23,44,23,33,13,45];
var max = marks [0];

for (let i = 0; i < marks.length; i++) {

    var element = marks[i];
    if(element>max){
        max = element;
    }
    

};
console.log("Highest value is ", max);
