var student = /** @class */ (function () {
    function student(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    return student;
}());
function greeter(person) {
    return "Hello, " + this.firstName + " Your age is " + this.age;
}
var std = new student("Jane User", 12);
document.body.textContent = greeter({ "firstName": "red", "age": 1 });
