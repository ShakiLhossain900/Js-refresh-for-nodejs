// var  name = "shakil"; // for the use of const we don't have plan to change the const keyword
// let age = 26;  // amara let use korle amara change korte parbu
// const hasHobbies = true;
 
// //const name='moure'; //ata kaj korbe na karon akhane const use koreci 
// var name = "moure"; // for the use of also can run as like let 
// let =30;

// function summarize(name, age, hasHobbies) {
//   return ( "name is " + name + " age is " + age + " and i had a " + hasHobbies);
// }
// console.log(summarize(name, age, hasHobbies));

//ARROW FUNCTION 
// var  name = "shakil";
// let age = 26; 
// const hasHobbies = true;
 

// const  summarize=(name, age, hasHobbies)=> {
//   return ( "name is " + name + " age is " + age + " and i had a " + hasHobbies);
// }
// console.log(summarize(name, age, hasHobbies));


// // // const addOne=(a,b)=> a+b;
// // const addRandom=()=>1+1;
// // console.log(addRandom())

// object 
// const person ={
//     name: 'shakil',
//     age:26,
//     // great:()=>{ //arrow funtion kaj korbe na old function use korte hobe 
//     great: function(){
//         console.log(' hi this is shakil '+ this.name +' name age is '+ this.age);
//     }
// };
// person.great();

//ARRYAY and ARRAY METHOD
// const hobies =['Shports ', 'cooking'];
// // for (let hobby of hobies) {
// //     console.log(hobby);
// // }
// // console.log(hobies.map(hobby=>'hobby : '+ hobby));
// hobies.push('programming');
// hobies.push('dev');
// hobies.pop('programming');
// console.log(hobies);


// spread and 
// const hobies =['Shports ', 'cooking'];

// //const copiedArrays =hobies.slice(); //slice er vitor value na dile poro array copy kore nibe
// //const coppiedArray2= [hobies]; //[ [ 'Shports ', 'cooking' ] ] akta array er vitor arekta array asbe output y
// const coppiedArray3 = [...hobies]; //spread operator all the elementsniye asbe  
// console.log(hobies);

// console.log(coppiedArray3);

//rest operators
// const toArray = (arg1, arg2, arg3) =>{
//     return [arg1,arg2,arg3];   // beshi argument pathale big data onk hard hoy
// }
// const toArray = (...arg) =>{   ///rest operator atto line likha lage na
//     return arg;
// }
// console.log(toArray(1,2,3,4,5));


// // object Destructuring 
// const person = {
//     name: 'shakil',
//     age: 29
// }

// // const printName =(person)=>{
// //     console.log(person.name , person.age);
// // }
// const printName =({name})=>{
//      console.log(name);
// }

// printName(person)

// const {name , age} = person
// console.log(name,age);

// // array  Destructuring 
// const hasHobbies =['dev developer', 'and researcher'];
// const [hobby1,hobby2] = hasHobbies;
// console.log(hobby1,hobby2);

// Destructuring 
const person = {
  name:'Max',
  age : 29,
  greet(){
    console.log('Hi! i am ' + this.name);
  }
}
// const printName = (personData) => {

const printName = ({name, age}) => {
  console.log(name,age);
}
printName(person);

//destructuring outside of the function 
const {name, age} = person;
console.log(name, age);

//array destructuring
const hobies = ['blockchain', 'researcher'];
const [hobby1, hobby2] = hobies;
console.log(hobby1,hobby2); // amara log korteci array na , two individual value print korteci


//async and promise 