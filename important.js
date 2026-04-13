// const obj = {
//   name: "Ankit",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// obj.greet();  //undefined


// const obj = {
//   name: "Ankit",
//   greet: function () {
//     console.log(this.name);
//   }
// };
// obj.greet(); // "Ankit"


// function greet() {
//     let username = "Ankit";
//     console.log(`${this.username} welcome to the website`);
// }
// greet();


// const greet2 = () => {
//     const username = "Ankit";
//     console.log(`${this.username} welcome to the website`);
// }
// greet2();

// function outer() {
//     const username = "Ankit";
//     function greet() {
//         console.log(`${this.username} welcome to the website`);
//     }
//     greet();
// }
// outer(); //undefined

// function outer() {
//     const username = "Ankit";
//     const greet = () => {
//         console.log(`${this.username} welcome to the website`);
//     }
//     greet();
// }
// outer(); //undefined

// const obj = {
//     username: "Ankit",
//     greet: function () {
//         function inner() {
//             console.log(`${this.username} welcome to the website`);
//         }
//         inner();
//     }
// };
// obj.greet();  //undefied


// const obj = {
//     username: "Ankit",
//     greet: function () {
//         const inner = () => {
//             console.log(`${this.username} welcome to the website`);
//         }
//         inner();
//     }
// };
// obj.greet();  //Ankit


// const obj = {
//     name: "Ankit",
//     greet: function () {
//         console.log(this.name);

//         setTimeout(function () {
//             console.log(this.name);
//         }, 0);
//     }
// };
// obj.greet();

// const obj = {
//     name: "Ankit",
//     greet: function () {
//         const inner = () => {
//             console.log(this.name);
//         }
//         inner();
//     }
// }
// obj.greet();   //Ankit


const obj = {
    name: "Ankit",
    greet: function () {
        console.log(this.name);

        setTimeout(function () {
            console.log(this.name);
        }, 0);
    }
};

obj.greet(); //Ankit undefined

