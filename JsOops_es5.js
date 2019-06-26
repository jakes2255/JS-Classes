function User(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
}

var user1 = new User("Jeff",50,"jeff.bez@gmail.com");
var user2 = new User("JJenny",25,"jenny@gmail.com"); 
console.log("First User"+user1.name+" and second user"+user2.name);