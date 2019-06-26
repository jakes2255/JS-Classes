//feels like java
class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayFullDetails(){
        console.log("User details are:- Name: "+this.name+" Age: "+this.age+" and Email: "+this.email);
    }
}
//create an object of class
const user1 =  new User("Jeff",30,"jeff@gmail.com");//const from ES6
user1.displayFullDetails();
