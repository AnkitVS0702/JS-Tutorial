// let price1 = 100;

// if (true) {
//     var price = 50; // This overwrites the global 'price' variable
//     console.log(price); // Output: 50
// }

// console.log(price1); // Output: 50 (The value was changed unexpectedly)


// console.log(score);
// let score=10;

// sayhello();
// function sayhello(){
//     console.log("Hello world");
// }

// const checkStock = () => {
//   return new Promise((resolve, reject) => {
//     const itemsInStock = false;

//     setTimeout(() => {
//       if (itemsInStock) {
//         resolve("Item is available!");
//       } else {
//         reject("Sorry, out of stock.");
//       }
//     }, 2000);
//   });
// };

// // Consumption
// checkStock()
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Process complete."));

// const check = async () => {
//     try {
//         const data = await fetch("https://api.github.com/users/AnkitVS0702");
//         const json_data = await data.json();
//         console.log(`FETCHED SUCCESSFULLY ! ${str_data.login}`)
//     }
//     catch(error) {
//         console.log(`error occurred ${error}`)
//     }
// }

// check();
// const str = "raceca"
// function isPalindrome(word) {
//     const revWord = str.split('').reverse().join('');
//     if (revWord == str) {
//         console.log("Palindrome");
//     }
//     else {
//         console.log("Not palindrome");
//     }
// }
// isPalindrome(str);

// function removeDup(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDup([1,2,3,4,5,5,5,5,6,6,7,1,2]));

foo();

function foo()  {
    console.log("Hello");
};