var name = [3,4,5,2,4,5,6,7,5,34,33];
var Uname= [];

for( var i =0; i< name.length; i++){

    var element = name [i];
    var index = Uname.indexOf(element);
    if(index==-1){
        Uname.push(element);
    }
}
console.log(Uname);
