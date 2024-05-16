class Animal {
    constructor(species) {
        this.species = species;
    }

    getSpecies() {
        return this.species;
    }

    makeSound() {
        console.log("The animal makes a sound.");
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr");
    }

    makeSound() {
        super.makeSound();
        console.log("The cat says 'meow'.");
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof");
    }

    makeSound() {
        super.makeSound();
        console.log("The dog says 'woof'.");
    }
}

const myCat = new Cat("domestic cat");
const myDog = new Dog("German Shepherd");

document.getElementById("cat-btn").addEventListener("click", () => {
    myCat.makeSound();
    myCat.purr();
});

document.getElementById("dog-btn").addEventListener("click", () => {
    myDog.makeSound();
    myDog.bark();
});