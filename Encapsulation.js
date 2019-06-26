class User{
    constructor(name,age,email){
        this._name = name;
        this._age = age;
        this._email = email;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }    
}
//extending similar to java classes
class Admin extends User {
    constructor(name,age,email,role){
        super(name,age,email);
        this._role = role;
    }
    get role(){
        return this._role;
    }
    set role(newRole){
        this._role = newRole;
    }    
}

const admin1 = new Admin("Hary",53,"hary@gmail.com","Sys Admin");
console.log(admin1.name +" and "+ admin1.role);