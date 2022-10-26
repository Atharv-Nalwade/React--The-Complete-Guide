// Normal function
function myName(name){
  console.log(name)
}

myName("athu");

// With arrow

const myName= (name) =>{  // for multiple arguments we can use (ar1,ar2)
console.log("name")
}
myName("Athu");

// If we hvae on;y one arg. we can avoid () around arg

const myName= name =>{
console.log("name")
}
myName("Athu");

// If no arguments then empty ()
const myName= () =>{
console.log("name")
}
myName("Athu");

// If we only return somethinng in the function then we can put it in one line and omit the return keyword

const myName= name => console.log("name")

myName("Athu");


// Exports and Imports 

// Eg
// In person.js
const person={
name:"Max"
}
default export person

// In app.js
  import prs from './person.js'        // Here we choose the name with which we want to import
//or 
  import any_name from './person.js'


//Eg
// Im utility.js
export const clean=() => {-----}
export const id=10;
                          
// In app.js
   import {clean} from './utility.js'  //  Here we have to write the exact name with which we want to import
   //or
   import {clean as alias_name} from './utility.js'
   import {id} from './utility.js'
                          //or
   // If we have multiple imports we can do
   import * as bundled from './utility.js'
                          // and then do bundled.id or bundled .clean

Named export	                           Default export
export class                             User {...}	export default class User {...}
import {User}                            from ...	import User from ...


// Class 

class Human{
 constructor(){
   this.gender='male';
 }
  
  printGender(){
     console.log(this.gender)
  }

}

class Persons extends Human{
constructor(){
  super();  // super()  is used to invoke superclass orr parent class constructor
this.name="max";
}
  
  printName(){
console.log(this.name)
  }

}

var person = new Persons();  // Obj of Persons class
person.printGender();
person.printName();
                         
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
                          
                          // Spread and Rest Operators
                          
 // ... is used top split up array properties or object elements
 // If old prop is already there then it is over ridden
     let oldA=[5,4,3];
    let newA=[...oldA,2,1];    //  now newA is [5,4,3,2,1]
    
    let oldO={
   "a":1,
   "b":2
   }
   let newO={...oldO,"c":3}; 
// newO is  {
// a: 1,
//  b: 2,
//  c: 3
// }
                          
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
                          
                          // Destructing
 //Extract array ele or object prop and store them in variables
                          var arr=[1,2,3,4];
[a,b,c]=[1,2,3,4];
console.log(a,b,c);  // a is 1,  b is 2,  c is 3
                          
[a,b,c]=[1,2,3,4];
console.log(a, ,c);  // a is 1,   c is 3
           
 // Eg Object destructing
 const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name, realName } = hero;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'

                          
//Eg
var objn={
name:"test",
  age:"okish"
}

var {name}=objn;
console.log(name); // eaxct names need to be used
console.log(age);  // age is not destructed so it is undefined and gives err
                          
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
                          
     const string="stringify";
     var x=string;
     console.log(x);  // x is stringify as we copty the value and it is call by value not by reference
                          
      //hence
var string="stringify";
var x=string;
string="changed";
console.log(x);  // x is stringify
                          
// while arr and obj are call by refernce 
// If we are reassigning obj we are assignign ptr copy and hence changed to one might affect other as bothpoint to same
  var obje={
  name:"original"
}
var obj2=obje;  // obje kinda pointer or callb by referce where ptr is stored  obj2 and obje point to same obj
obje.name="changed"
console.log(obj2); // here obj2 is has "name":changed 
                          
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
                          
                          // Array Methods
   // Map
   //It takes a function as an input and applies it to every element in the input array, then returns the output array
     let arr=[1,2,3];

     var newarr = arr.map((any_name) =>{
     return any_name*10;
     })

    console.log(newarr);  // new arr is [10,20,30]
                          
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

*/
   
