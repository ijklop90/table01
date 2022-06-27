export class User {
    constructor(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getGender() {
        return this.male
    }

}