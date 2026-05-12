function User(username,logincnt,isLoggedIn){
this.username=username;
this.logincnt=logincnt;
this.isLoggedIn=isLoggedIn;
return this;
}

const user1 = new User("Ankit",5,true);
const user2 = User("Abhishek",7,false);
console.log(user2);