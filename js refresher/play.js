// // const name = 'MAx'; //just like var
// // let age = 29;
// // const hasHobbies = true; // a constant, value cant change

// // //older way to define a function
// // function sumarize(userName, age, HasHobby){
// //     return (
// //         'Name is:' + userName +
// //         ', Age is:' + age +
// //         ', the user has hobbies' + HasHobby
// //     );
// // }

// // //another way to define a function
// // const summarizeUSer1 = function(userName, age, HasHobby){
// //     return (
// //         'Name is:' + userName +
// //         ', Age is:' + age +
// //         ', the user has hobbies' + HasHobby
// //     );
// // }


// // //another way to define a function, up to date, more crisp and short
// // const summarizeUSer2 = (userName, age, HasHobby) => {
// //     return (
// //         'Name is:' + userName +
// //         ', Age is:' + age +
// //         ', the user has hobbies' + HasHobby
// //     );
// // }


// // //another shorter way
// // const add = (a , b) => {a+b};
// // const add1 = (a) => {a+1};
// // const addRandom = () => 1+2;

// // console.log(sumarize(name,age, hasHobbies));
// // console.log(summarizeUSer1(name,age, hasHobbies));
// // console.log(summarizeUSer2(name,age, hasHobbies));


// const person = {
//     name: 'Max',
//     age: 29,
//     greet: () => {
//         console.log('Hi there');
//     },
//     greet1: () => { // wont work
//         console.log('Hi there ' + this.name);
//     },
//     greet2(){
//         console.log('Hi there ' + this.name);
//     }
// };

// person.greet();
// person.greet1();
// person.greet2();


// const hobbies = ['Sports', 'Cooking'];

// console.log(hobbies.map(hobby => 'Hobbies: ' + hobby));
// console.log(hobbies);

// hobbies.push('swimming');
// console.log(hobbies);

// //spread operator ... pull out all elements or properties of object and put it in whatever is around it.

// // const copiedArray = [hobbies];

// // console.log(copiedArray);
// //[ [ 'Sports', 'Cooking', 'swimming' ] ]

// const copiedArray = [...hobbies];

// console.log(copiedArray);


// //...args in the function is rest operator, if we have 3 params, and passes more than 3 js allows it but will print only 3, so we use rest operator to allow any number of params

// // const toArr = (arg1, arg2, arg3) =>{
// //     return [arg1, arg2, arg3];
// // };

// // console.log(toArr(1,2,3));
// // // [ 1, 2, 3 ]

// // console.log(toArr(1,2,3, 4));
// // // [ 1, 2, 3 ]

// const toArr = (...args) => {
//     return args;
// };
// console.log(toArr(1,2,3,4));

// const copiedPerson = {...person};
// copiedPerson.greet2();
// //console.log();


// //destructuring add {} in arg list and list the property of incoming object in which we are interested

// const printName = (persondata) =>{
//     console.log(persondata.name );
// };

// printName(person);


// const printNameonly = ({name}) =>{
//     console.log(name);
// };

// printName(person);

// //also

// const { name, age} = person;

// console.log(name,age);


const fun = () =>{
    console.log('hello fun fun');
}
fun();

// setTimeout(() =>{
//     console.log('Done!!');
// }, 2000);

const fetchData = () =>{
    var promise = new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve('Done!!');
        }, 2000);
    });
    return promise;
};

setTimeout(() => {
    console.log('timer is done!!');
    fetchData()
    .then(text =>{
        console.log(text);
      return fetchData();
    })
    .then(text2 =>{
        console.log(text2);
    });
}, 1500);