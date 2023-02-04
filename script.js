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


//CODING CHALLENGE
//#3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

//SOLUTION
const markBMI = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calBMI: function() {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }
}
markBMI.calBMI();

//JOHN'S BMI
const johnkBMI = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calBMI: function() {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }
}
johnkBMI.calBMI();

//Task 3
if(markBMI.calBMI() > johnkBMI.calBMI()) {
    console.log(`${markBMI.name}'s BMI(${markBMI.calBMI()}) is higher than ${johnkBMI.name}'s BMI(${johnkBMI.calBMI()})!`)
} else{
    console.log(`${johnkBMI.name}'s BMI(${johnkBMI.calBMI()}) is higher than ${markBMI.name}'s BMI(${markBMI.calBMI()})!`)
}