const user={
    username:"Ankit V Shiksharthi",
    price:1000,
    address:"Jabalpur",
    member:true,

    welcome : function(){
        console.log("Welcome to our website, " + this.username); 
        console.log(this);   
    },
    thankyou: function(){
        console.log(`Thank you ${this.username} for your visit`)
    }
}
user.welcome()
user.thankyou()