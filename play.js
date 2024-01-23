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


// // const addOne=(a,b)=> a+b;
// const addRandom=()=>1+1;
// console.log(addRandom())

//object 
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
const hobies =['Shports ', 'cooking'];
// for (let hobby of hobies) {
//     console.log(hobby);
// }
console.log(hobies.map(hobby=>'hobby : '+ hobby));