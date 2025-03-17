const name = 'MAx'; //just like var
let age = 29;
const hasHobbies = true; // a constant, value cant change

//older way to define a function
function sumarize(userName, age, HasHobby){
    return (
        'Name is:' + userName +
        ', Age is:' + age +
        ', the user has hobbies' + HasHobby
    );
}

//another way to define a function
const summarizeUSer1 = function(userName, age, HasHobby){
    return (
        'Name is:' + userName +
        ', Age is:' + age +
        ', the user has hobbies' + HasHobby
    );
}


//another way to define a function, up to date, more crisp and short
const summarizeUSer2 = (userName, age, HasHobby) => {
    return (
        'Name is:' + userName +
        ', Age is:' + age +
        ', the user has hobbies' + HasHobby
    );
}

//another shorter way
const add = (a , b) => {a+b};
const add1 = (a) => {a+1};
const addRandom = () => 1+2;

console.log(sumarize(name,age, hasHobbies));
console.log(summarizeUSer1(name,age, hasHobbies));
console.log(summarizeUSer2(name,age, hasHobbies));


const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi there');
    },
    greet1: () => { // wont work
        console.log('Hi there ' + this.name);
    },
    greet2(){
        console.log('Hi there ' + this.name);
    }
};

person.greet();
person.greet1();
person.greet2();

