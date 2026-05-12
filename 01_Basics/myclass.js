function User(username) {
    this.username = username
}

User.prototype.printName = function () {
    console.log(`My name is ${this.username}`);
}

function Person(username, password, email) {
    User.call(this, username);  //in classes we can use super keyword
    this.email = email;
    this.password = password;
}

Person.prototype=Object.create(User.prototype)  //in classes we can use extends keyword
// Person.prototype.__proto__ = User.prototype; //Also correct

const myself = new Person("Ankit", "123", "xyz@abc.com");
myself.printName();
