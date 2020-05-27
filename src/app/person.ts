export class Person {
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

    // static createPerson(person: PersonOptions): Person {
    //     let newPerson = new Person(person.fName, person.lName, "n/a", "n/a", "n/a", "n/a", "n/a");
    //     if(person.age) {
    //         newPerson.age = person.age;
    //     }
    //     if(person.phone) {
    //         newPerson.phone = person.phone;
    //     }
    //     if(person.state) {
    //         newPerson.state = person.state;
    //     }
    //     if(person.zipcode) {
    //         newPerson.zipcode = person.zipcode;
    //     }
    //     if(person.occupation) {
    //         newPerson.occupation = person.occupation;
    //     }

    //     return newPerson;
    // }

}