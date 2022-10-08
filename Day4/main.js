function cmp(n1,n2){
    if(n1>n2){
        console.log("n1 is greater than n2");
    }
    else{
        console.log("n2 is greater than n1");
    }
}
cmp(2,4)

const subtract=function(n1,n2){
    return n1-n2;
}
console.log(subtract(5,0))

const person ={
    firstname:"john",
    lastname:"Doe",
    print:function(){
        console.log("this is print function");
    }
}
person.print()
//camelcase
