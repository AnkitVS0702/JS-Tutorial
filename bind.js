// const User = {
//     name: "Ankit",
//     email: "abc@gmail.com"
// }

// function greet(age) {
//     console.log(`Hello ${this.name} your age is ${age}`)
// }

// const fn=greet.bind(User);
// fn(35);
// fn(22);

const person = {
    name: this.name,
    sayName: function () {
        console.log(this.name);
    }
};
const p1=person("Ankit")

