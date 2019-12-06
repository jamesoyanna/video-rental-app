const person = {
    name: "james",
    walk: function() {
console.log(this);
    }

}
person.walk();
const walk = person.walk.bind(person);
walk()