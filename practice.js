//mdn for js encyclopedia

'use strict'
var a = 10
console.log(a)

a = "puneet"
console.log(a)

let b = 20
console.log(b)

b='b'
console.log(b)

let obj = {
    'hello' : 'world'
}

console.log(obj.hello)//it can not use blank string.
console.log(obj['hello']) //it can take blank string too.

var arr= [1,'2',"hello",false] // heterogeneous array.
console.log(arr[1])
console.log(arr[3])

//Datatypes in java : number,String,Boolean,undefined,object,function
console.log(typeof(undefined))
console.log(typeof(true))
console.log(typeof(null))

//Type casting
console.log([]==0)
console.log([]==' ')
console.log([]=='')
console.log(1=='1') // == compares value
console.log(1==='1')//=== compare value + datatype

// Deep and shllow copy
let arr1 = [1,2,3]
let b1 = arr1;

let arr2=[1,2,3]

console.log([1,2,3] == arr1)// references are diff(deep copy)
console.log(arr1 == b1)// reference is same(shallow copy)

arr2[10]=4

console.log(arr2)

for(let i=arr1.length;i>=0;i--){
    console.log(arr1[i])
}

//function + hoisting
function fun(){
    console.log("hello");
}

fun()

fun1()
function fun1(){
    console.log("fun1"); 
} // hoisted so fun1() will give output fun1

//fun2() 
var fun2 = function(){
    console.log("fun2")
}//above fun2 will not work as var is hoisted first and fun2 is not assigned to it at that time so it will give error

var x = 10;

function fun3(){
    //var will get hoisted here (talking about var x = 100) so below console will give undefined
    console.log(x);
    var x = 100; 
    console.log(x);
}

fun3();

console.log("----------------------------------------------------------------")

var x = 10
function fun3(){
   // will work nrmlly as there is no var in function
    console.log(x);
    x = 100; 
    console.log(x);
}

fun3();

console.log("----------------------------------------------------------------")
var y = 7
function fun3(y){
    
     console.log(y);
 }
 
 fun3()// output undefined as we are not passing any value to y

 console.log("-------------------------------------------------------------")

 var y = 7
function fun3(y="hi"){
    
     console.log(y);
 }
 
 fun3()// output hi as we are not passing anything to y so it will take default value assigned to it

 console.log("---------------------------------------------------------")

 function outerfun(fun){
     console.log("this is out fun " + fun)
 }

 function innerfun(){
     console.log("this is inner fun")

 }

 outerfun(innerfun()); // as innerfun is not returning anything so it will return innerfun console then outerfun console + value returned by innerfun which in this case is undefined.

 function outerfun1(fun){
    console.log("this is out fun " + fun)
}

function innerfun1(){
    console.log("this is inner fun")
    return 1;       

}

outerfun1(innerfun1());

console.log("----------------------------------------------------------------")

//call by value

let a1 = 1;

function call(a1){
    a1=a1+10;
}

console.log(a1) 

console.log("----------------------------------------------------------------")

//Event loop Async func.

function time(){
    console.log("after 5 seconds")// it will go to browser queue and wait for other programs to run which are faster than this
}

setTimeout(time,5000);

console.log("faster than upper one")

console.log("----------------------------------------------------------------")

let obja = {
    a:1,
    b:2,
    c:3
}

let objb = Object.create(obja);// inherited the properties of a but b does not has its own property.

objb.b=10; // now it has its own property for b;

console.log(objb);
console.log(obja);

console.log(objb.a);
console.log(objb.b);
console.log(objb.c);

console.log("----------------------------------------------------------------")

//this operator.

let objc = {
    a:1,
    b:2,
    c:function fun(){
        return this;//will return objc as this is used for implicit binding
    }
}

console.log(objc.c());

console.log("----------------------------------------------------------")

// private in js

function priv(name,age){
    this.name = name,
    this.isAdult = function (){
        return age>=18;// now age will not be accesible ouside as this is a closure
    }
}

let p = new priv("puneet",18);

console.log(p.name);
console.log(p.age)
console.log(p.isAdult())

console.log("------------------------------------------------------------------")

//classes 

class person{
    constructor(name,age){
        this.name=name;
        this.isAdult= function fun(){
            return age>=18
        }
    }

    get firstname(){// getter
        return this.name.split(' ')[0];
    }
    set lastname(newLastName){//setter
        this.name = this.name.split(' ');
        this.name.pop();
        this.name.push(newLastName);
        this.name = this.name.join(' ')
    }
}

let p1 = new person("puneet garg",20);
console.log(p1.name);
console.log(p1.age);
console.log(p1.isAdult());
console.log(p1.firstname);

p1.lastname = "gupta";

console.log(p1.name)

console.log("----------------------------------------------------------------")
//callback

function call1(){
    setTimeout(function calling1(){
        console.log("1st function")
    },1000);
}

function call2(){
    setTimeout(function calling2(){
        call1();
        console.log("calling2")
    },4000);
}

function call3(){
    setTimeout(() => {
        call2();
        console.log("calling3");
    }, 2000);
}

call3();

setTimeout(function(){console.log("-------------------------------------------------------------------")},8000)

// Promises

// Lambda functions
//lambda fucntions are arrow functions an they are stateless, lambda functions does not support this.

let a3 = ()=>{
    console.log("lambda function")
}

a3();

console.log("----------------------------------------------------------------------")

// some basic methods

let arr4=[3,4,7,1,2,9];

arr4 = arr4.sort((a,b)=>(a-b)) //  do insertion sorting

console.log(arr4)

let arr5 = [1,5,4,2,7,6]
let ans = arr5.reduce((accum,val,idx,arr4)=>{
return accum+val;
})

console.log(ans)

arr5 = arr5.filter((i)=>i%2==0) //filter the array and will show only even elements

console.log(arr5)

arr5 = arr5.map((i)=>i*i*i) //will make a new array and make the changes at same position as in old array

console.log(arr5);

console.log("------------------------------------------------------------------")

//HOC (higher order functions)
var radius= [1,2,3,4,5];

const area= (radius)=>{
    return Math.PI*radius*radius;
}
const circumference= (radius)=>{
    return Math.PI*radius*2;
}
const diameter= (radius)=>{
    return 2*radius;
}

const calculate= function (radius, logic){// using for loop
    const output= [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

console.log("______using for each_________")

const calculate1= function (radius, logic){//using for each
    const output= [];
   radius.forEach(element => {
       output.push(logic(element))
   });
    return output;
}

console.log(calculate1(radius,area));
console.log(calculate1(radius,circumference));
console.log(calculate1(radius,diameter));

console.log("___________using map______________")
var calculate3= radius.map(area);

console.log("____________Making our own map like thing______________")

Array.prototype.calculate4= function (logic){
    const output= [];
   for(let i=0;i<this.length;i++){
       output.push(logic(this[i]))}
    return output;
}

console.log(radius.calculate4(area))

console.log("_____________________________________________________________")

function fun(){
    var x=0;
    
    function inner(){
        x++;
        console.log(x);
    }
    return inner;
}



var h= fun();// outer function will be called
h()// inner function will be called => output = 1 
h()//inner function will be called => output=2

function fun(){
    var x=0;
    
    function inner(){
        x++;
        console.log(x);
    }
    return inner;
}



fun()();// in this case outerfunction will get called x will be initialized to zero
fun()();// then inner function will be called. so output in both case will be one

function fun(){
    var x=0;
    
    function inner(){
        x++;
        console.log(x);
    }
    return inner();
}



fun();// in this case outerfunction will get called x will be initialized to zero
//then inner function will be called so output will be one everytime