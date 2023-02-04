"use strict"

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: [
        'Micheal', 'Peter', 'Steven'
    ]
}

//CHALLENGE 
//Print the string "Jonas has 3 friends, and his best friend is called Micheal"
//Without hard coding "Jonas", "3" and "Micheal"    

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
//CHALLENGE
const eric = {
    name: 'Erick',
    job: 'web developer',
    friends: ['otoo', 'emma', 'akwasi'],
    birthYear: 1998,
    hasDriversLicense : true,
    calcAge: function(){
        this.age = 2023 - this.birthYear
        return this.age
    },
    getSummaryOfEric: function() {
        return `${this.name} is a ${this.calcAge()}old ${this.job} and he ${this.hasDriversLicense = false ? `has a`:`does not`} drivers license, he has ${this.friends.length} which are ${this.friends}`
    }
}

console.log(eric.calcAge())
console.log(eric.age)
console.log(eric)


//Write a method called getSummary and this method returns a string which should summarize the data about Erick
//Erick is a 25yrs old web developer, and he has a drivers license or not

//SOLUTION
console.log(eric.getSummaryOfEric())