// Global scope
let globalCount = 0

// Local scope
function example1 () {
    let x = 1
    console.log(x)
}

function modify () {
    let x = 1
    globalCount++
    x++
    console.log(globalCount)
    console.log(x)
}

function person(name, last, age, hair) {
    this.firstname = name;
    this.lastname = last;
    this.age = 19;
    this.hairtype = hair;

    this.intro = function () {
        console.log(`His name is ${this.firstname} ${this.lastname} ,he is ${this.age} years old and has ${this.hairtype} hair `)
    }
}

const person1 = new person("Elijah", "Lategan", 19, "curly")
const person2 = new person("Jack", "lemkus", 22, "straight")
person1.intro()
person2.intro()

let profile = {
    name: 'Elijah',
    location: {
        Country: 'South Africa',
        Province: 'Western Cape',
        City: 'Cape Town'
    },
    hairtype: {
        Length: 'Short',
        Type: 'Type'
    }
}

console.log(profile)
example1()
modify()