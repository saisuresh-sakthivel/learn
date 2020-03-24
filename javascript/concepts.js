let animal ={
    "canSpeak":false,
    "profession":"hunting"
}
let rabbit = {
    "canHop":true
}
rabbit.__proto__ = animal;

console.log(rabbit.canHop);
console.log(rabbit.canSpeak);
