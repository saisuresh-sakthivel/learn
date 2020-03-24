class student{
    fullname:string;
    constructor(public firstName : string,public age:Number ){}
}
interface Person {
    firstName : String;
    age : Number;
}
function greeter(person:Person) {
    return "Hello, " + this.firstName+ " Your age is "+this.age;
}

let std = new student("Jane User",12);

document.body.textContent = greeter({"firstName":"red","age":1});
