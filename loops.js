const map1 = new Map();
map1.set('Ankit V Shiksharthi', 29);
map1.set('Ankit Raj', 28);
map1.set('Devendra', 30);

// for (const [it,val] in map1){
//     console.log(`${it}->${val}`);
// }

// const myArr = ['Jabalpur', 'Mumbai', 'Madras', 'Delhi', 'Banglore', 'Hyderabad', 'Dehradun'];
// myArr.forEach((val) => { console.log(`this is ${val}`) })

const myArr = [
    {
        name: "Ankit",
        roll_no: 29
    },
    {
        name: "Ankit Raj",
        roll_no: 28
    },
    {
        city: "Jabalpur",
        state: 'MP'
    }
]

// myArr.forEach((obj) => {
//     for (const k in obj) {
//         console.log(`${k}->${obj[k]}`)
//     }
// })

myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var total = myNums.reduce(
    (acc, num) => num + acc, 114
)
console.log(total);