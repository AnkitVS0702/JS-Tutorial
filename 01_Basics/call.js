// function setUsername(username) {
//     this.username = username
//     console.log("Called. Inside setUsername");
//     // console.log(this);
// }
// function createUser(username, password, email) {
//     setUsername.call(username);
//      console.log(this.username);
//     this.email = email;
//     this.password = password;
// }
// const student =  new createUser("Ankit", 158, "abc@xyz.com");
// console.log(student);


function user(username, passowrd) {
    this.username = username
    this.password = passowrd
    //   return this
}

const p = new user("Ankit", "123");
const p1 = new user("AVS", "123");
console.log(p);