// function sayHello(person : string) : string{
//     return "Hello, " + person;
// }
// let user = "Meng Yang";
// document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(fName, lName, age, phone, state, zipcode, occupation, hourlyWage, certs) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.phone = phone;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Person.prototype.getFullName = function () {
        return this.fName + " " + this.lName;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phone;
    };
    Person.prototype.getLocation = function () {
        return this.state + ", " + this.zipcode;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.getWeeklyWage = function (hours) {
        if (hours) {
            return this.hourlyWage * hours;
        }
        else {
            return this.hourlyWage * 40;
        }
    };
    Person.prototype.getNameAndWage = function () {
        return this.getFullName() + " " + this.getWeeklyWage();
    };
    Person.prototype.addCerts = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            this.certs.push(args[i]);
        }
    };
    Person.createPerson = function (person) {
        var newPerson = new Person(person.fName, person.lName, "n/a", "n/a", "n/a", "n/a", "n/a");
        if (person.age) {
            newPerson.age = person.age;
        }
        if (person.phone) {
            newPerson.phone = person.phone;
        }
        if (person.state) {
            newPerson.state = person.state;
        }
        if (person.zipcode) {
            newPerson.zipcode = person.zipcode;
        }
        if (person.occupation) {
            newPerson.occupation = person.occupation;
        }
        return newPerson;
    };
    return Person;
}());
var person1 = new Person("Joe", "Exotic", "55", "7042324151", "Oklahoma", "41525", "Tiger King", 17.50);
var person2 = new Person("Carol", "Baskin", "50", "7042324151", "Oklahoma", "41525", "Big B", 35);
var person3 = new Person("Meng", "Yang", "30", "7042324151", "North Carolina", "28262", "Cool guy", 100);
var person4 = Person.createPerson({ fName: "Yao", lName: "Smit", occupation: "student" });
document.getElementById("person1").innerHTML = person1.getNameAndWage();
document.getElementById("person2").innerHTML = person2.getOccupation();
document.getElementById("person3").innerHTML = person4.getOccupation();
