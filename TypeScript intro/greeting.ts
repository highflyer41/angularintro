// function sayHello(person : string) : string{
//     return "Hello, " + person;
// }

// let user = "Meng Yang";
// document.getElementById("para").innerHTML = sayHello(user);

class Person {
    fName: string;
    lName: string;
    age: string;
    phone: string;
    state: string;
    zipcode: string;
    occupation: string;
    hourlyWage: number;
    certs: string[];

    constructor(fName: string, lName: string, age?: string, phone?: string, state?: string, zipcode?: string, occupation?: string, hourlyWage?: number, certs?: string[]) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.phone = phone;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }

    getFullName(): string {
        return this.fName + " " + this.lName;
    }

    getPhoneNumber(): string {
        return this.phone;
    }

    getLocation(): string {
        return this.state + ", " + this.zipcode;
    }

    getAge(): string {
        return this.age;
    }

    getOccupation(): string {
        return this.occupation;
    }

    getWeeklyWage(hours?: number): number {
        if(hours) {
            return this.hourlyWage * hours;
        } else {
            return this.hourlyWage * 40;
        }
    }

    getNameAndWage(): string {
        return this.getFullName() + " " + this.getWeeklyWage();
    }

    addCerts(...args) {
        for(let i = 0; i < args.length; i++) {
            this.certs.push(args[i]);
        }
    }

    static createPerson(person: PersonOptions): Person {
        let newPerson = new Person(person.fName, person.lName, "n/a", "n/a", "n/a", "n/a", "n/a");
        if(person.age) {
            newPerson.age = person.age;
        }
        if(person.phone) {
            newPerson.phone = person.phone;
        }
        if(person.state) {
            newPerson.state = person.state;
        }
        if(person.zipcode) {
            newPerson.zipcode = person.zipcode;
        }
        if(person.occupation) {
            newPerson.occupation = person.occupation;
        }

        return newPerson;
    }

}

interface PersonOptions {
    fName: string;
    lName: string;
    age?: string;
    phone?: string;
    state?: string;
    zipcode?: string;
    occupation?: string;
    hourlyWage?: number;
    certs?: string[];
}

let person1 = new Person("Joe", "Exotic", "55", "7042324151", "Oklahoma", "41525", "Tiger King", 17.50);

let person2 = new Person("Carol", "Baskin", "50", "7042324151", "Oklahoma", "41525", "Big B", 35);

let person3 = new Person("Meng", "Yang", "30", "7042324151", "North Carolina", "28262", "Cool guy", 100);

let person4 = Person.createPerson({fName: "Yao", lName: "Smit", occupation: "student"});

document.getElementById("person1").innerHTML = person1.getNameAndWage();
document.getElementById("person2").innerHTML = person2.getOccupation();
document.getElementById("person3").innerHTML = person4.getOccupation();